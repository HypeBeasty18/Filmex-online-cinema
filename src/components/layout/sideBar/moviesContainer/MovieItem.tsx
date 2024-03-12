import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

import { getGenreslist } from '@/utils/movie/getGenresList'

import s from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={s.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<div className={s.link}>
					<Image
						width={65}
						height={97}
						src={movie.poster}
						draggable={false}
						alt={movie.title}
						priority
					/>
				</div>
			</Link>
			<div className={s.info}>
				<div className={s.title}>{movie.title}</div>
				<div className={s.genres}>
					{movie.genres.map((genre, index) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
							<div>{getGenreslist(index, movie.genres.length, genre.name)}</div>
						</Link>
					))}
				</div>
				<div className={s.rating}>
					<MaterialIcon name='MdStarRate' />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
