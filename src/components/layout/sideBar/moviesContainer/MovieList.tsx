import Link from 'next/link'
import { FC } from 'react'

import MovieItem from './MovieItem'
import s from './Movielist.module.scss'
import { IMovieList } from './movie-list.interface'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={s.list}>
			<div className={s.heading}>{title}</div>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<div className={s.button}>See more</div>
			</Link>
		</div>
	)
}

export default MovieList
