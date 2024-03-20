import { getContentType } from '@/api/api.helpers'
import { axiosClassic, instance } from '@/api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actors/actorEdit/actor-edit.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { API_URL, getActorsUrl } from '@/config/api.config'

import { IActor } from '@/shared/types/movie.types'

import { transferToGalleryActors } from './home.helpers'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return instance.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async deleteActor(id: string) {
		return instance.delete<string>(getActorsUrl(`/${id}`))
	},
	async createActor() {
		return instance.post<string>(getActorsUrl(`/`))
	},
	async updateActor(id: string, data: IActorEditInput) {
		return instance.put<string>(getActorsUrl(`/${id}`), data)
	},
	async getById(_id: string) {
		const response = await instance.get<IActorEditInput>(
			getActorsUrl(`/${_id}`)
		)
		return response.data
	},

	async fetchActors() {
		try {
			const response = await fetch(`${API_URL}${getActorsUrl('')}`, {
				cache: 'force-cache',
				headers: getContentType()
			}).then(res => res.json())

			const actors: IActor[] = response

			const actorsGallery: IGalleryItem[] = transferToGalleryActors(actors)

			return actorsGallery
		} catch (error) {
			return []
		}
	},
	async getBySlug(slug: string) {
		return await axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	}
}
