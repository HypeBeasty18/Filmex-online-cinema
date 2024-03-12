import { FC } from 'react'

import s from './SideBar.module.scss'
import Search from './search/Search'
import MoviesContainer from './moviesContainer/MoviesContainer'

const SideBar: FC = () => {
  return (
    <div className={s.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default SideBar