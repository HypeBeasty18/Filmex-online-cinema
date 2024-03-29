'use client'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import AuthFileds from '@/components/screens/auth/AuthFileds'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'


import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'

const UserEdit: FC = () => {
	const { register, handleSubmit, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Layout>
			<Heading title='Edit genre' />
			<form onSubmit={handleSubmit(onSubmit)} className='admin-form'>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFileds register={register} formState={formState} />

						<Controller
							control={control}
							name='isAdmin'
							render={({ field }) => (
								<button
									onClick={e => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className='text-link block mb-7'
								>
									{field.value ? 'Make it regular user' : 'Make it admin '}
								</button>
							)}
						></Controller>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Layout>
	)
}

export default UserEdit
