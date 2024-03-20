import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'

import { titleMerge } from '@/config/seo.config'

import { NextPage } from 'next'
import Admin from '@/components/screens/admin/home/Admin'

export const metadata: Metadata = {
	title: titleMerge('Admin panel'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage  = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<Admin/>
		</AuthProvider>
	)
}

export default page
