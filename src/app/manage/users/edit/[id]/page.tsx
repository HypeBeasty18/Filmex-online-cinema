import AuthProvider from '@/providers/authProvider/AuthProvider'
import { Metadata, NextPage } from 'next'

import UserEdit from '@/components/screens/admin/users/userEdit/UserEdit'

import { titleMerge } from '@/config/seo.config'

export const metadata: Metadata = {
	title: titleMerge('Edit user'),
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
}

const page: NextPage = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
			<UserEdit />
		</AuthProvider>
	)
}

export default page
