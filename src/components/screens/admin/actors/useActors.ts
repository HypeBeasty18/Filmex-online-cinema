import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { ITableItem } from '@/components/ui/admin-table/adminHeader/adminTable/admin-table.interface'

import { getAdminUrl } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { ActorService } from '@/services/actor.service'


export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery({
		queryKey: ['Actors list', debouncedSearch],
		queryFn: () => ActorService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(
				(actor): ITableItem => ({
					_id: actor._id,
					editUrl: getAdminUrl(`actor/edit/${actor._id}`),
					items: [actor.name, String(actor.countMovies)]
				})
			)
	})

	useEffect(() => {
		if (queryData.isError) {
			toast.error('Error get actors')
		}
	}, [queryData.isError])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync } = useMutation({
		mutationKey: ['Delete actor'],
		mutationFn: (id: string) => ActorService.deleteActor(id),
		onError: () => toast.error('Error delete actor'),
		onSuccess: () => {
			toast.success('Actor deleted')
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
