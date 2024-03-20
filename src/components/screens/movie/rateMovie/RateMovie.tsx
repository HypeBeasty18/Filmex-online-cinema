'use client'

import { FC, useEffect, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import AuthButton from '@/components/ui/video-player/authPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import s from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const [isClient, setIsClient] = useState<boolean>(false)

	const { user } = useAuth()

	const { handleClick, isSended, rating } = useRateMovie(id)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className={s.wrapper}>
			<h3>How do you like this movie?</h3>
			<p>Ratings improve reccomendations</p>
			{isClient ? (
				<>
					{user ? (
						<>
							{isSended ? (
								<div className={s.thanks}>Thanks for the rating!</div>
							) : (
								<StarRatingComponent
									name='star-rating'
									value={rating}
									onStarClick={handleClick}
									emptyStarColor='#4f4f4f'
								/>
							)}
						</>
					) : (
						<AuthButton slug={slug} />
					)}
				</>
			) : (
				<SkeletonLoader />
			)}
		</div>
	)
}

export default RateMovie
