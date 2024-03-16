import { useMutation } from '@tanstack/react-query'
import { useCallback, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { FileService } from '@/services/file.service'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation({
		mutationKey: ['uploadImage'],
		mutationFn: (data: FormData) => FileService.upload(data, folder),
		onError: () => {
			toast.error('Failed to upload file')
		},
		onSuccess: ({ data }) => {
			onChange(data[0].url)
		}
	})

	const uploadFile = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
			if (files?.length) {
				const formData = new FormData()
				formData.append('image', files[0])
				await mutateAsync(formData)

				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			}
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
