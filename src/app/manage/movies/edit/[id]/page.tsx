import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { FC } from 'react'

import MovieEdit from '@/components/screens/admin/movies/movieEdit/MovieEdit'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Edit movie'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: FC = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<MovieEdit />
		</AuthProvider>
	)
}

export default page
