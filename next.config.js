/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	images: {
		loader: 'akamai',
		path: '/',
		// domains: 'localhost',
	},
};

module.exports = nextConfig;
