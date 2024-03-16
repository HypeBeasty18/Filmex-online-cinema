import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { ITableItem } from '@/components/ui/admin-table/adminHeader/adminTable/admin-table.interface'

import { getAdminUrl } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { userService } from '@/services/auth/user.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery({
		queryKey: ['Users list', debouncedSearch],
		queryFn: () => userService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(
				(user): ITableItem => ({
					_id: user._id,
					editUrl: getAdminUrl(`user/edit/${user._id}`),
					items: [user.email, convertMongoDate(user.createdAt)]
				})
			)
	})

	useEffect(() => {
		if (queryData.isError) {
			toast.error('Error get users')
		}
	}, [queryData.isError])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync } = useMutation({
		mutationKey: ['Delete user'],
		mutationFn: (id: string) => userService.deleteUser(id),
		onError: () => toast.error('Error delete user'),
		onSuccess: () => {
			toast.success('User deleted')
			queryData.refetch()
		}
	})

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			mutateAsync
		}),
		[queryData, searchTerm, mutateAsync]
	)
}
