'use client'

import { FC, useEffect, useState } from 'react'

import { useFavourites } from '@/components/screens/favourites/useFavourites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import MovieList from '../MovieList'

import NotAuthFavourites from './NotAuthFavourites'

const FavouriteMovies: FC = () => {
	const [isClient, setIsClient] = useState<boolean>(false)

	const { favouriteMovies, isLoading } = useFavourites()

	const { user } = useAuth()

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
			{isClient && !isLoading ? (
				<>
					{user ? (
						<MovieList
							many={favouriteMovies && favouriteMovies?.length > 3}
							movies={favouriteMovies?.slice(0, 3) || []}
							link='/favourites'
							title='Favourites'
						/>
					) : (
						<NotAuthFavourites />
					)}
				</>
			) : (
				<SkeletonLoader count={3} className='h-28 mb-4' />
			)}
		</>
	)
}

export default FavouriteMovies
