import { Metadata, NextPage } from 'next'

import FreshMovies from '@/components/screens/freshMovies/FreshMovies'

import { siteName, titleMerge } from '@/config/seo.config'

import { MovieService } from '@/services/movie.service'

const description =
	'New novies and series in excellent quality: legal, safe, wihout ads'

export const metadata: Metadata = {
	title: titleMerge('Fresh movies'),
	description: description,
	twitter: {
		card: 'summary_large_image'
	},
	openGraph: {
		title: titleMerge('Fresh movies'),
		description: description,
		url: 'localhost:3000',
		siteName: siteName,
		locale: 'en_US',
		type: 'website'
	}
}

const page: NextPage = async () => {
	const movies = await MovieService.fetchAllMovies()

	return <FreshMovies movies={movies} description={description} />
}

export default page
