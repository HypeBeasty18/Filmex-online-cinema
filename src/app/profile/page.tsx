import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata } from 'next'
import { FC } from 'react'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Profile'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: FC = () => {
	return (
		<AuthProvider Component={{ isOnlyUser: true }}>
			<div className='text-white'>Admin panel</div>
		</AuthProvider>
	)
}

export default page
