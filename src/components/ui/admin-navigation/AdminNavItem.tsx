'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import s from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
	const pathname = usePathname()

	return (
		<li>
			<Link href={link}>
				<div className={cn({ [s.active]: pathname === link })}>{title}</div>
			</Link>
		</li>
	)
}

export default AdminNavItem
