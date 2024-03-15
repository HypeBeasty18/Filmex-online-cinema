import { Metadata } from 'next'
import { FC, Suspense } from 'react'

import Auth from '@/components/screens/auth/Auth'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Auth'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Auth />{' '}
		</Suspense>
	)
}

export default page
