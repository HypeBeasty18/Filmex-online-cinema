'use client'

import { FC, Suspense, useEffect, useState } from 'react'

import { getAdminHomeUrl } from '@/config/url.config'

import { useAuth } from '@/hooks/useAuth'

import MenuItem from '../menu/menuItem/MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
			{isClient ? (
				user ? (
					<>
						<MenuItem
							item={{
								icon: 'MdSettings',
								link: '/profile',
								title: 'Profile'
							}}
						/>
						{user.isAdmin && (
							<MenuItem
								item={{
									icon: 'MdOutlineLock',
									link: getAdminHomeUrl(),
									title: 'Admin panel'
								}}
							/>
						)}
						<LogoutButton />
					</>
				) : (
					<MenuItem
						item={{
							icon: 'MdLogin',
							link: '/auth',
							title: 'Login'
						}}
					/>
				)
			) : null}
		</>
	)
}

export default AuthItems
