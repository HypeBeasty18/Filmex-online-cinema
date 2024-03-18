import { Metadata } from 'next'

import Home from '@/components/screens/home/Home'

import { siteName, titleMerge } from '@/config/seo.config'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

export const metadata: Metadata = {
	title: titleMerge('Watch movies online'),
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser',
	twitter: {
		card: 'summary_large_image'
	},
	openGraph: {
		title: titleMerge('Watch movies online'),
		description:
			'Watch MovieApp movies and TV shows online or stream right to your browser',
		url: 'localhost:3000',
		siteName: siteName,
		locale: 'en_US',
		type: 'website'
	}
}

const page = async () => {
	const slides = await MovieService.fetchMovies()
	const actors = await ActorService.fetchActors()
	const trendingMovies = await MovieService.fetchTrendingMovies()

	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export default page
