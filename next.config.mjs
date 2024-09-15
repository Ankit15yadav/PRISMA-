/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'uploadthing.com',
            'utfs.io',
            'img.clerk.com',
            'subdomain',
            'files.stripe.com',
        ],
    },
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/site',
                permanent: true, // Use 'false' if you want a temporary redirect
            },
        ];
    },
};

export default nextConfig;
