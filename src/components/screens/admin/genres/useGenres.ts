import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { ITableItem } from '@/components/ui/admin-table/adminHeader/adminTable/admin-table.interface'

import { getAdminUrl } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery({
		queryKey: ['Genre list', debouncedSearch],
		queryFn: () => GenreService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(
				(genre): ITableItem => ({
					_id: genre._id,
					editUrl: getAdminUrl(`genre/edit/${genre._id}`),
					items: [genre.name, genre.slug]
				})
			)
	})

	useEffect(() => {
		if (queryData.isError) {
			toast.error('Error get movies')
		}
	}, [queryData.isError])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync } = useMutation({
		mutationKey: ['Delete genre'],
		mutationFn: (id: string) => GenreService.deleteGenre(id),
		onError: () => toast.error('Error delete genre'),
		onSuccess: () => {
			toast.success('Genre deleted')
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
