'use client'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import AuthFileds from '../auth/AuthFileds'

import s from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { register, handleSubmit, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange'
		})

	const { OnSubmit, isLoading } = useProfile(setValue)

	return (
		<Layout>
			<Heading title='Profile' className='mb-6' />

			<form onSubmit={handleSubmit(OnSubmit)} className={s.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<>
						<AuthFileds formState={formState} register={register} />

						<Button type='submit' disabled={isLoading}>
							Update
						</Button>
					</>
				)}
			</form>
		</Layout>
	)
}

export default Profile
