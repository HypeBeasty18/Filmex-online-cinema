'use client'

import { FC } from 'react'

import SearchField from '@/components/ui/searchField/SearchField'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'

import s from './Search.module.scss'
import SearchList from './searchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch()

	const { ref, isShow, setIsShow } = useOnClickOutside({
		isInitialValue: false
	})

	return (
		<div className={s.wrapper} ref={ref}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				setIsShow={setIsShow}
			/>
			{isSuccess && isShow && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
