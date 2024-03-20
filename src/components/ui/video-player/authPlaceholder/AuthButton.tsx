import Link from 'next/link'
import { FC } from 'react'


import s from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=/movie/${slug}`}>
			<div className={s.btn}>Sign in</div>
		</Link>
	)
}

export default AuthButton
