'use client'

import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/adminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/adminHeader/adminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteGenre,
		createGenre
	} = useGenres()

	return (
		<Layout>
			<AdminNavigation />
			<Heading title='Genres' />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createGenre}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteGenre}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
			/>
		</Layout>
	)
}

export default GenreList
