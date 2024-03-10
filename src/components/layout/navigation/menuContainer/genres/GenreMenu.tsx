'use client'

import { FC } from 'react'

import Menu from '../menu/Menu'

import { usePopularGenres } from './usePopularGenres'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className='mx-11 mb-6'><SkeletonLoader count={5} className='h-7 mb-5'/></div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu
