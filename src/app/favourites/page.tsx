
import Favourites from '@/components/screens/favourites/Favourites'
import { siteName, titleMerge } from '@/config/seo.config'
import { Metadata, NextPage } from 'next'

const description =
	'All movies in your favorite movies list'

export const metadata: Metadata = {
	title: titleMerge('Favourite movies'),
	description: description,
	twitter: {
		card: 'summary_large_image'
	},
	openGraph: {
		title: titleMerge('Favourite movies'),
		description: description,
		url: 'localhost:3000',
		siteName: siteName,
		locale: 'en_US',
		type: 'website'
	}
}


const page: NextPage = () => {


  return <Favourites/>
}

export default page