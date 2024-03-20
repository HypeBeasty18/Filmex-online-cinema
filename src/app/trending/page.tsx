import { Metadata, NextPage } from 'next'

import Trending from '@/components/screens/trending/Trending'

import { siteName, titleMerge } from '@/config/seo.config'

import { MovieService } from '@/services/movie.service'

const description =
	'Trending movies in excellent quality and comfort: legal, safe, and fun.'

export const metadata: Metadata = {
	title: titleMerge('Trending movies'),
	description: description,
	twitter: {
		card: 'summary_large_image'
	},
	openGraph: {
		title: titleMerge('Trending movies'),
		description: description,
		url: 'localhost:3000',
		siteName: siteName,
		locale: 'en_US',
		type: 'website'
	}
}

const page: NextPage = async () => {
	const movies = await MovieService.fetchTrendingNow()

	return <Trending movies={movies} description={description} />
}

export default page
