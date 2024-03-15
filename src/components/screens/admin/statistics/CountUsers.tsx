'use client'

import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { AdminService } from '@/services/admin.service'

import s from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery({
		queryKey: ['count-users'],
		queryFn: () => AdminService.getCountUsers()
	})

	return (
		<div className={cn(s.block, s.countUsers)}>
			{isLoading ? (
				<SkeletonLoader count={1} height={72} width={50} />
			) : (
				<div className={s.number}>{response?.data}</div>
			)}
			<div className={s.description}>users</div>
		</div>
	)
}

export default CountUsers
