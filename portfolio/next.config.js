/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    protocol: "https",
    hostname: "wallpaper.dog",
    port: "",
    pathname: "dog/large/*",
  },
  reactStrictMode: true,
};

module.exports = nextConfig
