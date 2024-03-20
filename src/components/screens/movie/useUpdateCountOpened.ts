'use client'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

import { MovieService } from '@/services/movie.service'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation({
		mutationKey: ['Update count opened'],
		mutationFn: () => MovieService.updateCountOpened(slug)
	})

	useEffect(() => {
		mutateAsync()
	}, [])
}
