import { FC } from 'react'

import s from './Gallery.module.scss'
import GalleryItem from './GalleryItem'
import { IGalleryItem } from './gallery.interface'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={s.gallery}>
			{items.map(item => (
				<GalleryItem key={item.link} item={item} variant='vertical' />
			))}
		</div>
	)
}

export default Gallery
