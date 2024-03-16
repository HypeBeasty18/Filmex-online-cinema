import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '../Field'

import s from './SlugField.module.scss'

interface ISlugFieldsInput {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugFieldsInput> = ({ generate, register, error }) => {
	return (
		<div className='relative' >
			<Field
				{...register('slug', {
					required: 'Slug is required'
				})}
				placeholder='Slug'
				error={error?.message?.toString()}
			/>
			<button className={s.badge} onClick={generate} type='button'>
				Generate
			</button>
		</div>
	)
}

export default SlugField
