import { Metadata } from 'next'
import { FC } from 'react'

import Auth from '@/components/screens/auth/Auth'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Auth'),
	robots: 'noindex, nofollow'
}

const page: FC = () => {
	return <Auth />
}

export default page
