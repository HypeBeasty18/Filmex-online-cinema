import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { NextPage } from 'next'

import GenreList from '@/components/screens/admin/genres/GenreList'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Actors'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<GenreList />
		</AuthProvider>
	)
}

export default page
