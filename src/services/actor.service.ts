import { instance } from '@/api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actors/actorEdit/actor-edit.interface'

import { getActorsUrl } from '@/config/api.config'
import { getActorUrl } from '@/config/url.config'

import { IActor } from '@/shared/types/movie.types'

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
	}
}
