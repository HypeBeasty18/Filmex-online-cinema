'use client'

import ReactToastify from '@/providers/ReactToastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import { store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>

			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
