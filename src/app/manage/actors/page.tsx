import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { FC } from 'react'


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

const page: FC = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<ActorList/>
		</AuthProvider>
	)
}

export default page
