import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { ITableItem } from '@/components/ui/admin-table/adminHeader/adminTable/admin-table.interface'

import { getAdminUrl } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import { getGenresLists } from '@/utils/movie/getGenresList'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery({
		queryKey: ['Movies list', debouncedSearch],
		queryFn: () => MovieService.getAll(debouncedSearch),
		select: ({ data }) =>
			data.map(
				(movie): ITableItem => ({
					_id: movie._id,
					editUrl: getAdminUrl(`movie/edit/${movie._id}`),
					items: [
						movie.title,
						getGenresLists(movie.genres),
						String(movie.rating)
					]
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
		mutationKey: ['Delete movie'],
		mutationFn: (id: string) => MovieService.deleteMovie(id),
		onError: () => toast.error('Error delete movie'),
		onSuccess: () => {
			toast.success('Movie deleted')
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
