/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false, // чтобы если пробивали сайт не увидили что он сделан на next js
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`
			}
		]
	}
}

export default nextConfig
