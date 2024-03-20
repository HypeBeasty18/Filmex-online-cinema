import { Metadata, NextPage } from 'next'

import Movie from '@/components/screens/movie/Movie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { siteName, titleMerge } from '@/config/seo.config'
import { getMovieUrl } from '@/config/url.config'

import { MovieService } from '@/services/movie.service'

type Props = {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({
	params
}: Props): Promise<Metadata> => {
	const { data: movie } = await MovieService.getBySlug(String(params.slug))

	const description = `${movie.title}`

	return {
		title: titleMerge(movie.title),
		description: description,
		twitter: {
			card: 'summary_large_image'
		},
		openGraph: {
			title: titleMerge(movie.title),
			description: description,
			url: 'localhost:3000',
			siteName: siteName,
			locale: 'en_US',
			type: 'website'
		}
	}
}

const page: NextPage<Props> = async ({ params }: Props) => {
	const { data: movie } = await MovieService.getBySlug(String(params.slug))

	const { data: dataSimilarMovies } = await MovieService.getByGenres(
		movie.genres.map(g => g._id)
	)

	const similarMovies: IGalleryItem[] = dataSimilarMovies
		.filter(m => m._id !== movie._id)
		.map(m => ({
			name: m.title,
			posterPath: m.poster,
			link: getMovieUrl(m.slug)
		}))

	return <Movie movie={movie} similarMovies={similarMovies} />
}

export default page
