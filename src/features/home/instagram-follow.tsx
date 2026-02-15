import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
import { instagram } from "@/lib/const";
import { Copy, Instagram } from "lucide-react";
import Link from "next/link";

const InstagramFollow = () => {
	return (
		<div className="container">
			<Typography variant="h2" className="flex justify-center mb-10">
				FOLLOW ME ON INSTAGRAM
			</Typography>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{instagram.map((item, index) => (
					<Link
						href="https://www.instagram.com"
						target="_blank"
						className="relative aspect-square group"
						key={index}
					>
						<NextImage
							src={item.image}
							className="aspect-square"
							imageClassName="object-cover"
						/>
						<Copy className="absolute text-white top-3 right-3 size-8" />
						<div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-white/30 group-hover:opacity-100">
							<Instagram className="text-white size-5" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default InstagramFollow;
