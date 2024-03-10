import MainProvider from '@/app/MainProvider'
import type { Metadata } from 'next'

import './globals.scss'

export const metadata: Metadata = {
	title: 'Filmex',
	description: 'Online cinema | Filmex'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<MainProvider>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</MainProvider>
	)
}
