'use client'

import { FC, SetStateAction } from 'react'

import MaterialIcon from '../MaterialIcon'

import s from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
	setIsShow?: React.Dispatch<SetStateAction<boolean>>
}

const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	setIsShow
}) => {
	const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
		event.preventDefault()
		setIsShow ? setIsShow(true) : null
	}

	return (
		<div className={s.search}>
			<MaterialIcon name='MdSearch' />
			<input
				placeholder='Search'
				value={searchTerm}
				onChange={handleSearch}
				onClick={handleClick}
			/>
		</div>
	)
}

export default SearchField
