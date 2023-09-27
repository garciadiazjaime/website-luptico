/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    contract: process.env.contract,
    alchemy_url: process.env.alchemy_url,
  },
};

module.exports = nextConfig;
