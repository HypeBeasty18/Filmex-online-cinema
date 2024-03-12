import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import { Metadata } from 'next'
import { FC } from 'react'


export const metadata: Metadata = {
	title: 'Page not found'
}
const Error404: FC = () => {
	return <Layout><Heading title='404 - Page Not Found'/></Layout>
}

export default Error404
