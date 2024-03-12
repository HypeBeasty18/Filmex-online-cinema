import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<Heading
				title='Watch movies online'
				className='text-gray-300 mb-8 text-xl'
			/>
		</Layout>
	)
}

export default Home
