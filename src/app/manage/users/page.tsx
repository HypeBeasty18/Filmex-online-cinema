import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { NextPage } from 'next'

import UserList from '@/components/screens/admin/users/UserList'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Users'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<UserList />
		</AuthProvider>
	)
}

export default page
