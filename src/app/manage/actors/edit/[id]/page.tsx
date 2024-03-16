import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { FC } from 'react'

import ActorEdit from '@/components/screens/admin/actors/actorEdit/ActorEdit'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Edit genre'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: FC = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<ActorEdit />
		</AuthProvider>
	)
}

export default page
