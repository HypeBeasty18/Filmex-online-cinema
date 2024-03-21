import { getContentType } from '@/api/api.helpers'
import { axiosClassic, instance } from '@/api/interceptors'

import { IMovieEditInput } from '@/components/screens/admin/movies/movieEdit/movie-edit.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { API_URL, getMoviesUrl } from '@/config/api.config'

import { IMovie } from '@/shared/types/movie.types'

import { transferToGalleryMovies, transferToSlides } from './home.helpers'

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
	},

	async fetchMovies() {
		try {
			const response = await fetch(`${API_URL}${getMoviesUrl('')}`, {
				cache: 'force-cache',
				headers: getContentType(),
				next: { revalidate: 3600 }
			}).then(res => res.json())

			const movies: IMovie[] = response

			const slides: ISlide[] = transferToSlides(movies)

			return slides
		} catch (error) {
			return []
		}
	},

	async fetchTrendingMovies() {
		try {
			const response = await fetch(
				`${API_URL}${getMoviesUrl('/most-popular')}`,
				{
					cache: 'force-cache',
					headers: getContentType(),
					next: { revalidate: 3600 }
				}
			).then(res => res.json())

			const movies: IMovie[] = response

			const moviesGallery: IGalleryItem[] = transferToGalleryMovies(movies)

			return moviesGallery
		} catch (error) {
			return []
		}
	},

	async fetchAllMovies() {
		try {
			const response = await fetch(`${API_URL}${getMoviesUrl('')}`, {
				cache: 'force-cache',
				headers: getContentType(),
				next: { revalidate: 3600 }
			}).then(res => res.json())

			const movies: IMovie[] = response

			return movies
		} catch (error) {
			return []
		}
	},

	async fetchTrendingNow() {
		try {
			const response = await fetch(
				`${API_URL}${getMoviesUrl('/most-popular')}`,
				{
					cache: 'force-cache',
					headers: getContentType(),
					next: { revalidate: 3600 }
				}
			).then(res => res.json())

			const movies: IMovie[] = response

			return movies
		} catch (error) {
			return []
		}
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl('/by-genres'), { genreIds })
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async updateCountOpened(slug: string) {
		return await instance.post(getMoviesUrl(`/update-count-opened`), {
			slug
		})
	}
}
