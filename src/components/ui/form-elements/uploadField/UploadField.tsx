import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '../../SkeletonLoader'
import { IUploadField } from '../form.interface'

import s from '../Form.module.scss'
import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	style,
	error,
	folder,
	isNoImage = false,
	value
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)

	return (
		<div className={cn(s.field, s.uploadField)} style={style}>
			<div className={s.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type='file' onChange={uploadFile} />
					{error && <div className={s.error}>{error}</div>}
				</label>
				{!isNoImage && (
					<div className={s.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader className='w-full h-full' count={1} />
						) : (
							value && <Image src={value} fill alt='' unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
