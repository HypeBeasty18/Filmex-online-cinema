import { FC } from 'react'

import { getMovieUrl } from '@/config/url.config'

import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import s from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<div>
			<Heading title={title} className={s.heading} />
			{description ? (
				<Description text={description} className={s.description} />
			) : null}
			<section className={s.movies}>
				{movies.map(movie => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title
							}
						}}
						className={s.movie}
						variant='horizontal'
					/>
				))}
			</section>
			{movies.length > 20 ? (
				<div className='text-center'>
					<button className={s.button}>Load more</button>
				</div>
			) : null}
		</div>
	)
}

export default Catalog
