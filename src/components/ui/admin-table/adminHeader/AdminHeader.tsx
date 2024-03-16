import { FC } from 'react'

import SearchField from '../../searchField/SearchField'

import s from './AdminHeader.module.scss'
import AdminCreateButton from './AdminCreateButton'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm
}) => {
	return (
		<div className={s.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick ? <AdminCreateButton onClick={onClick} /> : null}
		</div>
	)
}

export default AdminHeader
