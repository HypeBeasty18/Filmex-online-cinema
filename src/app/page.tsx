import { Metadata, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { siteName, titleMerge } from '@/config/seo.config'
import { getMovieUrl } from '@/config/url.config'

import { MovieService } from '@/services/movie.service'

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

export const getData = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

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

const page: NextPage<IHome> = async () => {
	const slides = await getData()

	return <Home slides={slides} />
}

export default page
