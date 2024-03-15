'use client'

import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SubHeading from '@/components/ui/heading/SubHeading'

import { getMovieUrl } from '@/config/url.config'

import { MovieService } from '@/services/movie.service'

import { IMovie } from '@/shared/types/movie.types'

import s from '../Admin.module.scss'

const PopularMovie: FC = () => {
	const { isLoading, data: response } = useQuery({
		queryKey: ['top-movie'],
		queryFn: () => MovieService.getMostPopularMovies(),
		select: (data): IMovie => data[0]
	})

	return (
		<div className={cn(s.block, s.popular)}>
			<SubHeading title='The most popular movie' />
			{isLoading ? (
				<SkeletonLoader className='h-48'  />
			) : (
				response && (
					<>
						<h3>Opened {response.countOpened} times</h3>
						<Link href={getMovieUrl(response.slug)}>
							<Image
								width={285}
								height={176}
								src={response.bigPoster}
								alt={response.title}
								className={s.image}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie
