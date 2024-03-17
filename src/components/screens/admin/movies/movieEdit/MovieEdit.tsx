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
import UploadField from '@/components/ui/form-elements/uploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'
import Select from '@/components/ui/select/Select'

import generateSlug from '@/utils/string/generateSlug'

import formStyles from '../../../../ui/form-elements/admin-form.module.scss'

import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActors } from './useAdminActors'
import { useAdminGenre } from './useAdminGenre'
import { useMovieEdit } from './useMovieEdit'

const ActorEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IMovieEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isActorsLoading, data: dataActors } = useAdminActors()
	const { isLoading: isGenresLoading, data: dataGenres } = useAdminGenre()

	const handleGenerate = () => {
		setValue('slug', generateSlug(getValues('title')))
	}

	return (
		<Layout>
			<Heading title='Edit movie' />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('title', {
									required: 'Title is required'
								})}
								placeholder='Title'
								error={errors.title?.message?.toString()}
								style={{ width: '48%' }}
							/>
							<div style={{ width: '48%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={handleGenerate}
								/>
							</div>

							<Field
								{...register('parameters.country', {
									required: 'Country is required'
								})}
								placeholder='Country'
								error={errors.parameters?.country?.message?.toString()}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Duration is required'
								})}
								placeholder='Duration (min.)'
								error={errors.parameters?.duration?.message?.toString()}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Year is required'
								})}
								placeholder='Year'
								error={errors.parameters?.year?.message?.toString()}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '48%' }}>
								<Controller
									control={control}
									name='genres'
									render={({ field, fieldState: { error } }) => (
										<Select
											field={field}
											options={dataGenres || []}
											isloading={isGenresLoading}
											isMulti
											placeholder='Genres'
											error={error?.message?.toString()}
										/>
									)}
									rules={{
										required: 'Plese select at least one genre'
									}}
								/>
							</div>

							<div style={{ width: '48%' }}>
								<Controller
									control={control}
									name='actors'
									render={({ field, fieldState: { error } }) => (
										<Select
											field={field}
											options={dataActors || []}
											isloading={isActorsLoading}
											isMulti
											placeholder='Actors'
											error={error?.message?.toString()}
										/>
									)}
									rules={{
										required: 'Plese select at least one actor'
									}}
								/>
							</div>

							<div className='mb-10 w-full'>
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
							</div>

							<div style={{ width: '48%' }}>
								<Controller
									control={control}
									name='poster'
									defaultValue=''
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<UploadField
											onChange={onChange}
											value={value}
											error={error?.message?.toString()}
											folder='movies'
											placeholder='Poster'
										/>
									)}
									rules={{
										required: 'Poster is required'
									}}
								/>
							</div>

							<div style={{ width: '48%' }}>
								<Controller
									control={control}
									name='bigPoster'
									defaultValue=''
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<UploadField
											onChange={onChange}
											value={value}
											error={error?.message?.toString()}
											folder='movies'
											placeholder='Big poster'
										/>
									)}
									rules={{
										required: 'Big poster is required'
									}}
								/>
							</div>

							<div style={{ width: '48%' }}>
								<Controller
									control={control}
									name='videoUrl'
									defaultValue=''
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<UploadField
											onChange={onChange}
											value={value}
											error={error?.message?.toString()}
											folder='movies'
											placeholder='Video'
											style={{ marginTop: -25 }}
											isNoImage
										/>
									)}
									rules={{
										required: 'Video is required'
									}}
								/>
							</div>
						</div>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Layout>
	)
}

export default ActorEdit
