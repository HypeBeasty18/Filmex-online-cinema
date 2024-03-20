import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IGenre, IMovie } from '@/shared/types/movie.types'

import NotFound from '../notFound/NotFound'

interface IGenrePage {
	movies: IMovie[]
	description: string
	genre: IGenre | undefined
}

const Genre: FC<IGenrePage> = async ({ movies, description, genre }) => {
	return genre ? (
		<Layout>
			<Catalog
				movies={movies || []}
				title={genre.name}
				description={description}
			/>
		</Layout>
	) : (
		<NotFound />
	)
}

export default Genre
