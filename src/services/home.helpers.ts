import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { getActorUrl, getMovieUrl } from '@/config/url.config'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { getGenresLists } from '@/utils/movie/getGenresList'

export const transferToSlides = (movies: IMovie[]) => {
	const slides: ISlide[] = movies.slice(0, 3).map(movie => ({
		_id: movie._id,
		link: getMovieUrl(movie.slug),
		bigPoster: movie.bigPoster,
		subTitle: getGenresLists(movie.genres),
		title: movie.title
	}))

	return slides
}

export const transferToGalleryActors = (actors: IActor[]) => {
	const actorsGallery: IGalleryItem[] = actors.slice(0, 10).map(actor => ({
		name: actor.name,
		posterPath: actor.photo,
		link: getActorUrl(actor.slug),
		content: {
			title: actor.name,
			subTitle: `${actor.countMovies} movies`
		}
	}))

  return actorsGallery
}


export const transferToGalleryMovies = (movies: IMovie[]) => {
	const moviesGallery: IGalleryItem[] = movies.slice(0, 10).map(movies => ({
		name: movies.title,
		posterPath: movies.poster,
		link: getMovieUrl(movies.slug),
	}))

  return moviesGallery
}