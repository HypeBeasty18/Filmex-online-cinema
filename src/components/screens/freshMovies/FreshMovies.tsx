import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

const FreshMovies: FC<{ movies: IMovie[]; description: string }> = ({
	movies,
	description
}) => {
	return (
		<Layout>
			<Catalog
				movies={movies || []}
				title='Fresh movies'
				description={description}
			/>
		</Layout>
	)
}

export default FreshMovies
