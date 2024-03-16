import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { IOption } from '@/components/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

export const useAdminActors = () => {
	const queryData = useQuery({
		queryKey: ['List of actors'],
		queryFn: () => ActorService.getAll(),
		select: ({ data }) =>
			data.map((actor): IOption => ({ label: actor.name, value: actor._id }))
	})

	useEffect(() => {
		if (queryData.isError) {
			toast.error(queryData.error.message)
		}
	}, [queryData.isError, queryData.error])


	return queryData
}
