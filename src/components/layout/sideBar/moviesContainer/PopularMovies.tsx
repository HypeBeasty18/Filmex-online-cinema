'use client'

import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const { isLoading, data: PopularMovies } = useQuery({
		queryKey: ['popular-movies'],
		queryFn: () => MovieService.getMostPopularMovies()
	})

	return isLoading ? (
		<div className='mt-11 '>
			<SkeletonLoader count={3} className='h-28 mb-4' />
		</div>
	) : (
		<MovieList
			link='/trending'
			many={PopularMovies && PopularMovies?.length > 3}
			movies={PopularMovies?.slice(0, 3) || []}
			title='Popular Movies'
		/>
	)
}

export default PopularMovies
