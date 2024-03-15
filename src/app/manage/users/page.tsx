import AuthProvider from '@/providers/authProvider/AuthProvider'
import { FC } from 'react'

const page: FC = () => {
	return (
		<AuthProvider Component={{ isOnlyAdmin: true }}>
      fsdf
		</AuthProvider>
	)
}

export default page
