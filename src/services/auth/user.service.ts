import { instance } from '@/api/interceptors'

import { getUsersUrl } from '@/config/api.config'

import { IUser } from '@/shared/types/user.types'

export const userService = {
	async getAll(searchTerm: string) {
		return instance.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async deleteUser(id: string) {
		return instance.delete<string>(getUsersUrl(`/${id}`))
	}
}
