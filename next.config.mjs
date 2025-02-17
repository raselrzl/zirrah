/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    typescript:{
        ignoreBuildErrors: true,
    },
    trailingSlash: true,
};
export default nextConfig;