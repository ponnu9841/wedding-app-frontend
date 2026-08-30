import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
// import { instagram } from "@/lib/const";
import { Copy, Instagram } from "lucide-react";
import Link from "next/link";

const InstagramFollow = ({
	instagramFollowData,
}: {
	instagramFollowData: InstagramFollow[] | null;
}) => {
	return (
		<div className="container">
			<Typography variant="h2" className="flex justify-center text-center mb-10">
				FOLLOW ME ON INSTAGRAM
			</Typography>
			<div className="grid grid-cols-3 gap-0.25 lg:gap-2 lg:grid-cols-4 -mx-3 lg:mx-0">
				{instagramFollowData?.map((item, index) => (
					<Link
						href={item.url}
						target="_blank"
						className="relative aspect-[100/129] group"
						key={index}
					>
						<NextImage
							src={item.image}
							className="aspect-[100/129]"
							imageClassName="object-cover"
						/>
						<Copy className="absolute text-white top-3 right-3 size-4 lg:size-8" />
						<div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-white/30 group-hover:opacity-100">
							<Instagram className="text-white size-3 lg:size-5" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default InstagramFollow;
