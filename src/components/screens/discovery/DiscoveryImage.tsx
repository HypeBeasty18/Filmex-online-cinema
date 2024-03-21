import Image from 'next/image'
import { FC } from 'react'

import { IDiscovery } from './discovery.interface'

const DiscoveryImage: FC<{ collection: IDiscovery }> = ({
	collection: { image, title }
}) => {
	return <Image alt={title} src={image} fill draggable={false} />
}

export default DiscoveryImage
