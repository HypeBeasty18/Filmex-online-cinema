
import { FC } from 'react'

import Logo from './Logo'
import s from './Navigation.module.scss'
import MenuContainer from './menuContainer/MenuContainer'

const Navigation: FC = () => {
	return (
		<div className={s.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
