import { useMutation, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'

import { getAdminUrl } from '@/config/url.config'

import { userService } from '@/services/auth/user.service'

import { IUserEditInput } from './user-edit.interface'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const pathname = usePathname()

	const parts = pathname.split('/')
	const userId = parts[parts.length - 1] // чтобы при undefined не вызывало ошибки а просто выводило строку с 'undefined'

	const { push } = useRouter()

	const { data, isError, isSuccess, isLoading } = useQuery({
		queryKey: ['user edit', userId],
		queryFn: () => userService.getById(userId),
		enabled: !!userId
	})

	useEffect(() => {
		if (isSuccess) {
			setValue('email', data.email)
			setValue('isAdmin', data.isAdmin)
		}
	}, [isSuccess, data, setValue])

	useEffect(() => {
		if (isError) {
			toast.error('Error get user to edit')
		}
	}, [isError])

	const { mutateAsync } = useMutation({
		mutationKey: ['Update user'],
		mutationFn: (data: IUserEditInput) => userService.update(userId, data),
		onError: () => toast.error('Error update user'),
		onSuccess: () => {
			toast.success('User updated')
			push(getAdminUrl('users'))
		}
	})

	const onSubmit: SubmitHandler<IUserEditInput> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
