'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import s from './Auth.module.scss'
import AuthFileds from './AuthFileds'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const { register, handleSubmit, reset, formState } = useForm<IAuthInput>({
		mode: 'onBlur'
	})

	const { login, register: reg } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			reg(data)
		} 
	}

	return (
		<Layout>
			<section className={s.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' className='mb-6' />

					<AuthFileds
						formState={formState}
						register={register}
						isPasswordRequierd
					/>

					<div className={s.buttons}>
						<Button
							type='submit'
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type='submit'
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Layout>
	)
}

export default Auth
