import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images-pw.pixieset.com",
			},
			{
				protocol: "https",
				hostname: "images.pixieset.com",
			},
			{
				protocol: "https",
				hostname: "*.squarespace-cdn.com",
			},
			{
				protocol: "https",
				hostname: "*.vimeocdn.com",
			},
			{
				protocol: "https",
				hostname: "magicmotionmedia.com",
			},
		],
	},
};

export default nextConfig;
