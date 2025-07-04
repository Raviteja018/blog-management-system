/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "picsum.photos",
                protocol: "https",
                port: '',
            },
             {
                hostname: "github.com",
                protocol: "https",
                port: '',
            },
            {
                hostname: "lh3.googleusercontent.com",
                protocol: "https",
                port: '',
            },
        ]
    }
};

export default nextConfig;
