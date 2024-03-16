import { FC } from 'react'

import s from './SideBar.module.scss'
import MoviesContainer from './moviesContainer/MoviesContainer'
import Search from './search/Search'

const SideBar: FC = () => {
	return (
		<div className={s.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default SideBar
