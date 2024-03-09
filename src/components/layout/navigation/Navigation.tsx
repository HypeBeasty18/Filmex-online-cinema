import { FC } from 'react'

import Logo from './Logo'
import MenuContainer from './menuContainer/MenuContainer'
import s from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={s.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
