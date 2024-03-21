'use client'

import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useFavourites } from '@/components/screens/favourites/useFavourites'

import { userService } from '@/services/auth/user.service'

import s from './FavouriteButton.module.scss'

const FavouriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState<boolean>(false)

	const { favouriteMovies, refetch } = useFavourites()

	useEffect(() => {
		if (!favouriteMovies) return

		const isHasMovie = favouriteMovies.some(movie => movie._id === movieId)

		if (isSmashed !== isHasMovie) {
			setIsSmashed(isHasMovie)
		}
	}, [favouriteMovies, movieId, isSmashed])

	const { mutateAsync } = useMutation({
		mutationKey: ['update favourite movie'],
		mutationFn: () => userService.toggleFavourite(movieId),
		onError: () => toast.error('Error to update favourite movie'),
		onSuccess: () => {
			setIsSmashed(!isSmashed)
			refetch()
		}
	})

	const handleClick = () => {
		mutateAsync()
	}

	return (
		<button
			className={cn(s.button, {
				[s.animate]: isSmashed
			})}
			onClick={handleClick}
			style={{ backgroundImage: 'url("/heart-animation.png")' }}
		/>
	)
}

export default FavouriteButton
