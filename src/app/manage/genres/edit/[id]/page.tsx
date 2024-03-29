import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { NextPage } from 'next'

import GenreEdit from '@/components/screens/admin/genres/genreEdit/GenreEdit'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Edit genre'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<GenreEdit />
		</AuthProvider>
	)
}

export default page
