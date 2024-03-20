import Image from 'next/image'
import { FC } from 'react'

import s from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={s.banner}>
			<Image
				src={image}
				draggable={false}
				fill
				className=' object-top object-cover pointer-events-none'
				unoptimized
				priority
				alt=''
			/>
			{Detail ? <Detail /> : null}
		</div>
	)
}

export default Banner
