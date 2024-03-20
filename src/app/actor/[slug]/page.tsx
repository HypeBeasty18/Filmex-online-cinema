import { Metadata, NextPage } from 'next'

import Actor from '@/components/screens/actor/Actor'

import { siteName, titleMerge } from '@/config/seo.config'

import { ActorService } from '@/services/actor.service'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

type Props = {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({
	params
}: Props): Promise<Metadata> => {
	const { data: actor } = await ActorService.getBySlug(String(params.slug))

	const description = `Movies by ${actor.name}`

	return {
		title: titleMerge(actor.name),
		description: description,
		twitter: {
			card: 'summary_large_image'
		},
		openGraph: {
			title: titleMerge(actor.name),
			description: description,
			url: 'localhost:3000',
			siteName: siteName,
			locale: 'en_US',
			type: 'website'
		}
	}
}

const page: NextPage<Props> = async ({ params }: Props) => {
	const { data: actor } = await ActorService.getBySlug(String(params.slug))

	const { data: movies } = await MovieService.getByActor(actor._id)

	return <Actor movies={movies} actor={actor} />
}

export default page
