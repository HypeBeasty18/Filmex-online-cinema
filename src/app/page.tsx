import { Metadata, NextPage } from 'next'

import Home from '@/components/screens/home/Home'

import { siteName, titleMerge } from '@/config/seo.config'

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

const HomePage: NextPage = () => {
	return <Home />
}

export default HomePage
