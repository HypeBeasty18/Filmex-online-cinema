'use client'

import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/adminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/adminHeader/adminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteMovie, createMovie } = useMovies()

	return (
		<Layout>
			<AdminNavigation />
			<Heading title='Movies' />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createMovie} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteMovie}
				headerItems={['Title', 'Genre', 'Rating', 'Views']}
				tableItems={data || []}
			/>
		</Layout>
	)
}

export default MovieList
