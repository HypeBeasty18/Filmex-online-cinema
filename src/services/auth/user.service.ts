import { instance } from '@/api/interceptors'

import { IProfileInput } from '@/components/screens/profile/profile.interface'

import { getUsersUrl } from '@/config/api.config'

import { IUser } from '@/shared/types/user.types'

export const userService = {
	async getAll(searchTerm: string) {
		return await instance.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async deleteUser(id: string) {
		return await instance.delete<string>(getUsersUrl(`/${id}`))
	},
	async getProfile() {
		return await instance.get<IUser>(getUsersUrl('/profile'))
	},
	async updateProfile(data: IProfileInput) {
		return await instance.put<string>(getUsersUrl('/profile'), data)
	},
	async getById(_id: string) {
		const response = await instance.get<IUser>(getUsersUrl(`/${_id}`))
		return response.data
	},
	async update(_id: string, data: IProfileInput) {
		return await instance.put<string>(getUsersUrl(`/${_id}`), data)
	}
}
