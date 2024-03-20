import Link from 'next/link'
import { FC, Fragment } from 'react'

import { IContentList } from '../content.interface'

import s from './ContentList.module.scss'

const ContentList: FC<IContentList> = ({ links, name }) => {
	return (
		<div className={s.list}>
			<div className={s.name}>{name}</div>
			<div className={s.links}>
				{links.map((link, index) => (
					<Fragment key={index}>
						<Link href={link.link}>
							<div>{link.title}</div>
						</Link>
						{index + 1 !== links.length && <span>,&nbsp;</span>}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
