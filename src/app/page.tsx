import { getContentType } from '@/api/api.helpers'
import { Metadata, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { API_URL } from '@/config/api.config'
import { siteName, titleMerge } from '@/config/seo.config'
import { getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresLists } from '@/utils/movie/getGenresList'

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

const getData = async () => {
	try {
		const response = await fetch(`${API_URL}/movies`, {
			cache: 'force-cache',
			headers: getContentType()
		}).then(res => res.json())

		const movies: IMovie[] = response

		const slides: ISlide[] = movies.slice(0, 3).map(movie => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			bigPoster: movie.bigPoster,
			subTitle: getGenresLists(movie.genres),
			title: movie.title
		}))

		return slides
	} catch (error) {
		return []
	}
}

const page = async () => {
	const slides = await getData()
	return <Home slides={slides} />
}

export default page
