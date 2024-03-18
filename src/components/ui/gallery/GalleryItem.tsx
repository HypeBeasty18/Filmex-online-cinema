import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import s from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link}>
			<div
				className={cn(s.item, {
					[s.withText]: item.content,
					[s.horizontal]: variant === 'horizontal',
					[s.vertical]: variant === 'vertical'
				})}
			>
				<Image
					alt={item.name}
					src={item.posterPath}
					draggable={false}
					fill
					priority
          className={s.image}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

				/>
				{item.content ? (
					<div className={s.content}>
						<div className={s.title}>{item.content.title}</div>
						{item.content.subTitle ? (
							<div className={s.subTitle}>{item.content.subTitle}</div>
						) : null}
					</div>
				) : null}
			</div>
		</Link>
	)
}

export default GalleryItem
