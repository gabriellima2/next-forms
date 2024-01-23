/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'images.kabum.com.br' }
		]
	}
}

export default nextConfig
