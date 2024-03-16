'use client'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import Layout from '@/components/layout/Layout'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import TextEditor from '@/components/ui/form-elements/TextEditor'
import SlugField from '@/components/ui/form-elements/slugField/SlugField'
import Heading from '@/components/ui/heading/Heading'

import generateSlug from '@/utils/string/generateSlug'

import formStyles from '../../../../ui/form-elements/admin-form.module.scss'

import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IGenreEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	const handleGenerate = () => {
		setValue('slug', generateSlug(getValues('name')))
	}

	return (
		<Layout>
			<Heading title='Edit genre' />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required'
								})}
								placeholder='Name'
								error={errors.name?.message?.toString()}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={handleGenerate}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Icon is required'
								})}
								placeholder='Icon'
								error={errors.icon?.message?.toString()}
								style={{ width: '31%' }}
							/>
						</div>

						<Controller
							control={control}
							name='description'
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<TextEditor
									placeholder='Description'
									onChange={onChange}
									value={value}
									error={error?.message?.toString()}
								/>
							)}
							rules={{
								validate: {
									required: v =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required'
								}
							}}
						/>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Layout>
	)
}

export default GenreEdit
