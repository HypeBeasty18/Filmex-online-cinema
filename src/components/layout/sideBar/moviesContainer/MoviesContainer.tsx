import { FC } from 'react'

import PopularMovies from './PopularMovies'
import FavouriteMovies from './favouriteMovies/FavouriteMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavouriteMovies />
		</div>
	)
}

export default MoviesContainer
