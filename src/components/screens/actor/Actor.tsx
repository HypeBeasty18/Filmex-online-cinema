import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IActor, IMovie } from '@/shared/types/movie.types'

import NotFound from '../notFound/NotFound'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const Actor: FC<IActorPage> = async ({ movies, actor }) => {

  
	return actor ? (
		<Layout>
			<Catalog movies={movies || []} title={actor.name} />
		</Layout>
	) : (
		<NotFound />
	)
}

export default Actor
