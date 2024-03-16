import { axiosClassic, instance } from '@/api/interceptors'

import { getMoviesUrl } from '@/config/api.config'
import { getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async getMostPopularMovies() {
		const res = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
		return res.data
	},
	async deleteMovie(id: string) {
		return instance.delete<string>(getMovieUrl(`/${id}`))
	}
}
