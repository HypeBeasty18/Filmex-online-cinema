import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { getGenreUrl } from '@/config/url.config'

import s from './Discovery.module.scss'
import DiscoveryImage from './DiscoveryImage'
import { IDiscovery } from './discovery.interface'

const DiscoveryItem: FC<{ collection: IDiscovery }> = ({ collection }) => {
	return (
		<Link href={getGenreUrl(collection.slug)}>
			<div className={s.collection}>
				<DiscoveryImage collection={collection} />

				<div className={s.content}>
					<div className={s.title}>{collection.title}</div>
				</div>

				<div className={cn(s.behind, s.second)}>
					<DiscoveryImage collection={collection} />
				</div>
				<div className={cn(s.behind, s.third)}>
					<DiscoveryImage collection={collection} />
				</div>
			</div>
		</Link>
	)
}

export default DiscoveryItem
