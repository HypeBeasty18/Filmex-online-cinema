import { useMutation, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'

import { getAdminUrl } from '@/config/url.config'

import { GenreService } from '@/services/genre.service'

import { getKeys } from '@/utils/object/getKeys'

import { IGenreEditInput } from './genre-edit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const pathname = usePathname()

	const parts = pathname.split('/')
	const queryId = parts[parts.length - 1] // чтобы при undefined не вызывало ошибки а просто выводило строку с 'undefined'

	
	const { push } = useRouter()

	const { data, isError, isSuccess, isLoading } = useQuery({
		queryKey: ['Genre edit', queryId],
		queryFn: () => GenreService.getById(queryId),
		enabled: !!queryId
	})

	useEffect(() => {
		if (isSuccess) {
			getKeys(data).forEach(key => setValue(key, data[key]))
		}
	}, [isSuccess, data, setValue])

	useEffect(() => {
		if (isError) {
			toast.error('Error get genre to edit')
		}
	}, [isError])

	const { mutateAsync } = useMutation({
		mutationKey: ['Update genre'],
		mutationFn: (data: IGenreEditInput) =>
			GenreService.updateGenre(queryId, data),
		onError: () => toast.error('Error update genre'),
		onSuccess: () => {
			toast.success('Genre updated')
			push(getAdminUrl('genres'))
		}
	})

	const onSubmit: SubmitHandler<IGenreEditInput> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
