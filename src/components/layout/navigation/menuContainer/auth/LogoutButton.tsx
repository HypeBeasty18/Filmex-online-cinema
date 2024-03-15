'use client'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

import s from './LogoutButton.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className={s.li}>
			<a onClick={handleLogout}>
				<MaterialIcon name='MdLogout' />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
