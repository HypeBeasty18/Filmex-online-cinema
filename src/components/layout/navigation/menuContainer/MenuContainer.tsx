import { FC } from 'react'

import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'
import Menu from './menu/Menu'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
