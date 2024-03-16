import { useMutation, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'

import { getAdminUrl } from '@/config/url.config'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'

import { IMovieEditInput } from './movie-edit.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const pathname = usePathname()

	const parts = pathname.split('/')
	const queryId = parts[parts.length - 1] // чтобы при undefined не вызывало ошибки а просто выводило строку с 'undefined'

	const { push } = useRouter()

	const { data, isError, isSuccess, isLoading } = useQuery({
		queryKey: ['Movie edit', queryId],
		queryFn: () => MovieService.getById(queryId),
		enabled: !!queryId
	})

	useEffect(() => {
		if (isSuccess) {
			getKeys(data).forEach(key => setValue(key, data[key]))
		}
	}, [isSuccess, data, setValue])

	useEffect(() => {
		if (isError) {
			toast.error('Error get movie to edit')
		}
	}, [isError])

	const { mutateAsync } = useMutation({
		mutationKey: ['Update genre'],
		mutationFn: (data: IMovieEditInput) =>
			MovieService.updateMovie(queryId, data),
		onError: () => toast.error('Error update movie'),
		onSuccess: () => {
			toast.success('Movie updated')
			push(getAdminUrl('movies'))
		}
	})

	const onSubmit: SubmitHandler<IMovieEditInput> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
