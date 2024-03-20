import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/auth/user.service'

export const useFavourites = () => {
	const {
		isLoading,
		data: favouriteMovies,
		refetch
	} = useQuery({
		queryKey: ['List of favourites'],
		queryFn: () => userService.getFavourites(),
		select: ({ data }) => data
	})

	return { isLoading, favouriteMovies, refetch }
}
