import { Metadata } from 'next'
import { NextPage } from 'next'

import NotFound from '@/components/screens/notFound/NotFound'

export const metadata: Metadata = {
	title: 'Page not found'
}
const Error404: NextPage = () => {
	return <NotFound />
}

export default Error404
