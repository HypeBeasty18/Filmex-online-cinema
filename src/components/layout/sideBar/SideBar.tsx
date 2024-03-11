import { FC } from 'react'

import s from './SideBar.module.scss'
import Search from './search/Search'

const SideBar: FC = () => {
  return (
    <div className={s.sidebar}>
      <Search />
    </div>
  )
}

export default SideBar