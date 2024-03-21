import { axiosClassic, instance } from '@/api/interceptors'

import { IGenreEditInput } from '@/components/screens/admin/genres/genreEdit/genre-edit.interface'
import { IDiscovery } from '@/components/screens/discovery/discovery.interface'

import { API_URL, getGenresUrl } from '@/config/api.config'

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
		return instance.delete<string>(getGenresUrl(`/${id}`))
	},

	async updateGenre(id: string, data: IGenreEditInput) {
		return instance.put<string>(getGenresUrl(`/${id}`), data)
	},
	async getById(_id: string) {
		const response = await instance.get<IGenreEditInput>(
			getGenresUrl(`/${_id}`)
		)
		return response.data
	},
	async createGenre() {
		return instance.post<string>(getGenresUrl('/'))
	},

	async getBySlug(slug: string) {
		return await axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	// async getCollections() {
	// 	const response =  await axiosClassic.get<IDiscovery[]>(getGenresUrl('/collections'))
	// 	return response.data
	// }
}
