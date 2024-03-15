import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'

import { titleMerge } from '@/config/seo.config'

import Admin from '@/components/screens/admin/Admin'
import { FC } from 'react'

export const metadata: Metadata = {
	title: titleMerge('Admin panel'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: FC = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<Admin/>
		</AuthProvider>
	)
}

export default page
