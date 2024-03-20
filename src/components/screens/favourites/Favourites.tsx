'use client'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'

import FavouriteItem from './FavouriteItem'
import s from './Favourites.module.scss'
import { useFavourites } from './useFavourites'

const Favourites: FC = () => {
	const { isLoading, favouriteMovies } = useFavourites()

	return (
		<Layout>
			<Heading title='Favourites' />
			<section className={s.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={s.skeletonLoader}
						containerClassName={s.containerLoader}
					/>
				) : (
					favouriteMovies?.map(movie => (
						<FavouriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Layout>
	)
}

export default Favourites
