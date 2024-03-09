import { FC } from 'react'
import { IMenu } from '../menu.interface'

import s from './Menu.module.scss'
import MenuItem from './menuItem/MenuItem'
import AuthItems from '../auth/AuthItems'

const Menu: FC<{menu:IMenu}> = ({menu}) => {
  return (
    <div className={s.menu}>
      <div className={s.heading}>
        {menu.title}
      </div>
      <ul className={s.ul}>
        {menu.items.map(item => (
          <MenuItem key={item.title} item={item}/>
        ))}
        {menu.title === 'General' ? <AuthItems/> : null}
      </ul>
    </div>
  )
}

export default Menu