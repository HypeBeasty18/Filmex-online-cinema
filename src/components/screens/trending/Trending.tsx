import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

const Trending: FC<{ movies: IMovie[]; description: string }> = ({
	movies,
	description
}) => {
	return (
		<Layout>
			<Catalog
				movies={movies || []}
				title='Trending movies'
				description={description}
			/>
		</Layout>
	)
}

export default Trending
