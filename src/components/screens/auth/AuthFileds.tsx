import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequierd?: boolean
}

const AuthFileds: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequierd = false
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				})}
				placeholder='E-mail'
				error={errors.email?.message?.toString()}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequierd
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters'
								}
							}
						: {}
				)}
				type='password'
				placeholder='Password'
				error={errors.password?.message?.toString()}
				autoComplete='off'
			/>
		</>
	)
}

export default AuthFileds
