import { FC } from 'react'

import s from './AdminTable.module.scss'
import { IAdminTableItem } from './admin-table.interface'
import AdminActions from './adminActions/AdminActions'

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={s.item}>
			{tableItem.items.map(value => (
				<div key={value}>{value}</div>
			))}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTableItem
