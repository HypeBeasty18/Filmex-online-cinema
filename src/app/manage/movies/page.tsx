import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { NextPage } from 'next'


import { titleMerge } from '@/config/seo.config'
import MovieList from '@/components/screens/admin/movies/MovieList'

export const metadata: Metadata = {
	title: titleMerge('Movies'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<MovieList/>
		</AuthProvider>
	)
}

export default page
