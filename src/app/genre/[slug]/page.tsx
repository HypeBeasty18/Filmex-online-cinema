import { Metadata, NextPage } from 'next'

import Genre from '@/components/screens/genre/Genre'

import { siteName, titleMerge } from '@/config/seo.config'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

const description = 'Movies by selected genre'

type Props = {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({
	params
}: Props): Promise<Metadata> => {
	const { data: genre } = await GenreService.getBySlug(String(params.slug))

	return {
		title: titleMerge(genre.name),
		description: description,
		twitter: {
			card: 'summary_large_image'
		},
		openGraph: {
			title: titleMerge(genre.name),
			description: description,
			url: 'localhost:3000',
			siteName: siteName,
			locale: 'en_US',
			type: 'website'
		}
	}
}

const page: NextPage<Props> = async ({ params }: Props) => {
	const { data: genre } = await GenreService.getBySlug(String(params.slug))

	const { data: movies } = await MovieService.getByGenres([genre._id])

	return <Genre movies={movies} genre={genre} description={description} />
}

export default page
