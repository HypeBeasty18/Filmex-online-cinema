import { axiosClassic, instance } from '@/api/interceptors'

import { getGenresUrl } from '@/config/api.config'
import { getGenreUrl } from '@/config/url.config'

import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})
	},
	async deleteGenre(id: string) {
		return instance.delete<string>(getGenreUrl(`/${id}`))
	}
}
