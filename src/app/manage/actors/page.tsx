import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { NextPage } from 'next'


import { titleMerge } from '@/config/seo.config'
import ActorList from '@/components/screens/admin/actors/ActorList'

export const metadata: Metadata = {
	title: titleMerge('Actors'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage  = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<ActorList/>
		</AuthProvider>
	)
}

export default page
