import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IMovieProps } from '@/shared/types/movie.types'

import NotFound from '../notFound/NotFound'

import s from './Movie.module.scss'
import Content from './content/Content'

const Movie: FC<IMovieProps> = ({ movie, similarMovies }) => {
	return movie ? (
		<Layout>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<div className='mt-12'>
				<SubHeading title='Similar' />
				<Gallery items={similarMovies} />
			</div>
		</Layout>
	) : (
		<NotFound />
	)
}

export default Movie
