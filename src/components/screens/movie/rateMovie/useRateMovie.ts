import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useAuth } from '@/hooks/useAuth'

import { RatingService } from '@/services/rating.service'

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState<number>(0)

	const [isSended, setIsSended] = useState<boolean>(false)

	const { user } = useAuth()

	const { isSuccess, isError, refetch, data } = useQuery({
		queryKey: ['Your movie rating', movieId],
		queryFn: () => RatingService.getByUserMovie(movieId),
		enabled: !!movieId && !!user
	})

	useEffect(() => {
		if (isSuccess) {
			setRating(data.data)
		}
	}, [isSuccess])

	useEffect(() => {
		if (isError) {
			toast.error('Your movie rating has not been received')
		}
	}, [isError])

	const { mutateAsync } = useMutation({
		mutationKey: ['Update movie rating'],
		mutationFn: (value: number) => RatingService.setRating(movieId, value),
		onError: () => toast.error('Error to load movie rating'),
		onSuccess: () => {
			setIsSended(true)
			refetch()

			setTimeout(() => {
				setIsSended(false)
			}, 2400)
		}
	})

	const handleClick = async (ratingValue: number) => {
		setRating(ratingValue)
		await mutateAsync(ratingValue)
	}

	return { isSended, rating, handleClick }
}
