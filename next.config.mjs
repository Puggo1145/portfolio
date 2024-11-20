/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tinted-galette-9e6.notion.site",
            },
            {
                protocol: "https",
                hostname: "www.notion.so",
            },
            {
                protocol: "https",
                hostname: "cdn.thenewstack.io",
            }
        ]
    }
};

export default nextConfig;
