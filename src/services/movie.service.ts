import { axiosClassic, instance } from '@/api/interceptors'

import { IMovieEditInput } from '@/components/screens/admin/movies/movieEdit/movie-edit.interface'

import { getMoviesUrl } from '@/config/api.config'

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
		return instance.delete<string>(getMoviesUrl(`/${id}`))
	},
	async createMovie() {
		return instance.post<string>(getMoviesUrl(`/`))
	},

	async updateMovie(id: string, data: IMovieEditInput) {
		return instance.put<string>(getMoviesUrl(`/${id}`), data)
	},
	async getById(_id: string) {
		const response = await instance.get<IMovieEditInput>(
			getMoviesUrl(`/${_id}`)
		)
		return response.data
	}
}
