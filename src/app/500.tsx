import { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'


const Error500: NextPage = () => {
	return (
		<Layout>
			<Heading title='500 - Server side error occurred' />
		</Layout>
	)
}

export default Error500
