'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import s from './AdminActions.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	const handleEdit = () => {
		push(editUrl)
	}

	const handleRemove = () => {
		removeHandler()
	}

	return (
		<div className={s.actions}>
			<button onClick={handleEdit} className={s.edit}>
				<MaterialIcon name='MdEdit' />
			</button>
			<button className={s.remove} onClick={handleRemove}>
				<MaterialIcon name='MdClose' />
			</button>
		</div>
	)
}

export default AdminActions
