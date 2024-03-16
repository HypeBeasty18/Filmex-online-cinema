import { useMutation, useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toast } from 'react-toastify'

import { getAdminUrl } from '@/config/url.config'


import { getKeys } from '@/utils/object/getKeys'
import { IActorEditInput } from './actor-edit.interface'
import { ActorService } from '@/services/actor.service'


export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const pathname = usePathname()

	const parts = pathname.split('/')
	const queryId = parts[parts.length - 1] // чтобы при undefined не вызывало ошибки а просто выводило строку с 'undefined'


	const { push } = useRouter()

	const { data, isError, isSuccess, isLoading } = useQuery({
		queryKey: ['Actor edit', queryId],
		queryFn: () => ActorService.getById(queryId),
		enabled: !!queryId
	})

	useEffect(() => {
		if (isSuccess) {
			getKeys(data).forEach(key => setValue(key, data[key]))
		}
	}, [isSuccess, data, setValue])

	useEffect(() => {
		if (isError) {
			toast.error('Error get actor to edit')
		}
	}, [isError])

	const { mutateAsync } = useMutation({
		mutationKey: ['Update actor'],
		mutationFn: (data: IActorEditInput) =>
			ActorService.updateActor(queryId, data),
		onError: () => toast.error('Error update actor'),
		onSuccess: () => {
			toast.success('Actor updated')
			push(getAdminUrl('actors'))
		}
	})

	const onSubmit: SubmitHandler<IActorEditInput> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
