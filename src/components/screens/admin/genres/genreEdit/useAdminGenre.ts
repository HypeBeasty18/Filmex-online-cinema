import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { IOption } from '@/components/ui/select/select.interface'

import { GenreService } from '@/services/genre.service'

export const useAdminGenre = () => {
	const queryData = useQuery({
		queryKey: ['List of genres'],
		queryFn: () => GenreService.getAll(),
		select: ({ data }) =>
			data.map((genre): IOption => ({ label: genre.name, value: genre._id }))
	})

	useEffect(() => {
		if (queryData.isError) {
			toast.error(queryData.error.message)
		}
	}, [queryData.isError, queryData.error])

	return queryData
}
