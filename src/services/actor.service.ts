import { instance } from '@/api/interceptors'

import { getActorsUrl } from '@/config/api.config'
import { getActorUrl } from '@/config/url.config'

import { IActor } from '@/shared/types/movie.types'

export const ActorService = {
	async getAll(searchTerm: string) {
		return instance.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async deleteActor(id: string) {
		return instance.delete<string>(getActorUrl(`/${id}`))
	}
}
