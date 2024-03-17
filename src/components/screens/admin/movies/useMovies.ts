import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
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
					editUrl: getAdminUrl(`movies/edit/${movie._id}`),
					items: [
						movie.title,
						getGenresLists(movie.genres),
						String(movie.rating),
						String(movie.countOpened)
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

	const { push } = useRouter()

	const { mutateAsync: createMovie } = useMutation({
		mutationKey: ['Create movie'],
		mutationFn: () => MovieService.createMovie(),
		onError: () => toast.error('Error create movie'),
		onSuccess: ({ data: _id }) => {
			toast.success('Movie created')
			push(getAdminUrl(`movies/edit/${_id}`))
		}
	})

	const { mutateAsync: deleteMovie } = useMutation({
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
			deleteMovie,
			createMovie
		}),
		[queryData, searchTerm, deleteMovie, createMovie]
	)
}
