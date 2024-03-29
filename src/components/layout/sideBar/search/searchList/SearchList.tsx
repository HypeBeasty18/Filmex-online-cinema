import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

import s from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={s.list}>
			{movies.length ? (
				movies.map(movie => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<div className={s.movieCont}>
							<Image
								src={movie.poster || ''}
								width={50}
								height={50}
								alt={movie.title}
								draggable={false}
							/>
							<span>{movie.title}</span>
						</div>
					</Link>
				))
			) : (
				<div className='text-white text-center my-4'>Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
