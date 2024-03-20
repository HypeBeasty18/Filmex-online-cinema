import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { NextPage } from 'next'

import Profile from '@/components/screens/profile/Profile'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Profile'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage = () => {
	return (
		<AuthProvider Component={{ isOnlyUser: true }}>
			<Profile />
		</AuthProvider>
	)
}

export default page
