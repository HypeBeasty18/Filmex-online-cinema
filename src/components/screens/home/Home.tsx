import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import Slider from '@/components/ui/slider/Slider'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides }) => {
	return (
		<Layout>
			<Heading
				title='Watch movies online'
				className='text-gray-300 mb-8 text-xl'
			/>

			{slides.length && <Slider slides={slides} />}
		</Layout>
	)
}

export default Home
