import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import s from './Admin.module.scss'
import Statistics from './statistics/Statistics'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

const Admin: FC = () => {
	return (
		<Layout>
      <AdminNavigation/>
			<Heading title='Some statistics' />
			<Statistics />
		</Layout>
	)
}

export default Admin
