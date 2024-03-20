
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'

import { userService } from '@/services/auth/user.service'

import { IProfileInput } from './profile.interface'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading, isError, isSuccess, data } = useQuery({
		queryKey: ['User data'],
		queryFn: () => userService.getProfile()
	})

	useEffect(() => {
		if (isError) {
			toast.error('failed to get user')
		}
	}, [isError])

	useEffect(() => {
		if (isSuccess) {
			setValue('email', data.data.email)
		}
	}, [isSuccess, data, setValue])

	const { mutateAsync } = useMutation({
		mutationKey: ['Update profile'],
		mutationFn: (data: IProfileInput) => userService.updateProfile(data),
		onError: () => toast.error('Error update profile'),
		onSuccess: () => {
			toast.success('Profile updated')
		}
	})

	const OnSubmit: SubmitHandler<IProfileInput> = async data => {
		await mutateAsync(data)
	}

	return { OnSubmit, isLoading }
}
