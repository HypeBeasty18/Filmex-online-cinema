import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import FavouriteButton from '@/components/ui/favouriteButton/FavouriteButton'

import { getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

import s from './Favourites.module.scss'

const FavouriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={s.itemWrapper}>
			<FavouriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)}>
				<div className={s.item}>
					<Image
						alt={movie.title}
						src={movie.bigPoster}
						fill
						draggable={false}
						priority
					/>
					<div className={s.title}>{movie.title}</div>
				</div>
			</Link>
		</div>
	)
}

export default FavouriteItem
