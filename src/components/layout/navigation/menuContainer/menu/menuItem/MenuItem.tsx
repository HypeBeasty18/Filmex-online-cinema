'use client'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMenuItem } from '../../menu.interface'

import s from './MenuItem.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathName = usePathname()

	console.log(pathName)

	return (
		<li className={clsx(s.li, { [s.active]: pathName === item.link })}>
			<Link href={item.link}>
				<div>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</div>
			</Link>
		</li>
	)
}

export default MenuItem
