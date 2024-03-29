import MainProvider from '@/app/MainProvider'
import ReactToastify from '@/providers/ReactToastify'
import type { Metadata } from 'next'

import { siteName, titleMerge } from '@/config/seo.config'

import './globals.scss'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<MainProvider>
			<html lang='en'>
				<body>
					<ReactToastify />
					{children}
				</body>
			</html>
		</MainProvider>
	)
}

// export const metadata: Metadata = {
// 	title: 'Filmex',
// 	description: 'Online cinema | Filmex',
// 	twitter: {
// 		card: 'summary_large_image'
// 	},
// 	openGraph: {
// 		title: titleMerge('Watch movies online'),
// 		description:
// 			'Watch MovieApp movies and TV shows online or stream right to your browser',
// 		url: 'localhost:3000',
// 		siteName: siteName,
// 		locale: 'en_US',
// 		type: 'website'
// 	}
// }
