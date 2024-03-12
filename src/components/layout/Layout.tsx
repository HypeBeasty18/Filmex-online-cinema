import ReactToastify from '@/providers/ReactToastify'
import React, { FC } from 'react'

import s from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import SideBar from './sideBar/SideBar'

interface Props {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation />
			<div className={s.center}>
				<ReactToastify />
				{children}
			</div>
			<SideBar />
		</div>
	)
}

export default Layout
