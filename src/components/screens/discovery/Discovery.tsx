import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import s from './Discovery.module.scss'
import DiscoveryItem from './DiscoveryItem'
import { IDiscovery } from './discovery.interface'

export interface IDiscoveryProps {
	collections: IDiscovery[]
	title: string
	description: string
}

const Discovery: FC<IDiscoveryProps> = ({
	collections,
	description,
	title
}) => {
	return (
		<Layout>
			<Heading title={title} />
			<Description text={description} className={s.description} />
			{collections.length ? (
				<>
					{collections.map(collect => (
						<DiscoveryItem key={collect._id} collection={collect} />
					))}
				</>
			) : (
				<>
					<h3 className='mt-10 text-white text-3xl text-center'>
						Current page in progress...
					</h3>
				</>
			)}

			<section className={s.collections}></section>
		</Layout>
	)
}

export default Discovery
