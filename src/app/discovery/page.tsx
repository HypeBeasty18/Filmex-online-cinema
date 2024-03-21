import { Metadata, NextPage } from 'next'

import Discovery from '@/components/screens/discovery/Discovery'

import { siteName, titleMerge } from '@/config/seo.config'

import { GenreService } from '@/services/genre.service'

const description = 'Discovery of all movies in genre list'

const title = 'Discovery'

export const metadata: Metadata = {
	title: titleMerge(title),
	description: description,
	twitter: {
		card: 'summary_large_image'
	},
	openGraph: {
		title: titleMerge(title),
		description: description,
		url: 'localhost:3000',
		siteName: siteName,
		locale: 'en_US',
		type: 'website'
	}
}

const page: NextPage = async () => {
	// const collections = await GenreService.getCollections()

	return (
		<Discovery
			collections={[]}
			title={title}
			description={description}
		/>
	)
}

export default page
