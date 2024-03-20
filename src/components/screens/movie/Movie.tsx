'use client'

import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'
import VideoPlayer from '@/components/ui/video-player/VideoPlayer'

import { IMovieProps } from '@/shared/types/movie.types'

import NotFound from '../notFound/NotFound'

import Content from './content/Content'
import RateMovie from './rateMovie/RateMovie'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const Movie: FC<IMovieProps> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie ? movie.slug : '')

	return movie ? (
		<Layout>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<VideoPlayer slug={movie.slug} videoSrc={movie.videoUrl} />

			<div className='mt-12'>
				<SubHeading title='Similar' />
				<Gallery items={similarMovies} />
			</div>

			<RateMovie id={movie._id} slug={movie.slug} />
		</Layout>
	) : (
		<NotFound />
	)
}

export default Movie
