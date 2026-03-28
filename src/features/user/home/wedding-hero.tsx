import Typography from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";
import Link from "next/link";

const WeddingHero = ({
	bannerData,
}: {
	bannerData: HomeAboutBanner | null;
}) => {
	return (
		<div className="pb-20 space-y-15 bg-background-alt">
			<div className="h-71.5 md:h-122.25 lg:h-124 relative flex justify-center items-center">
				<div className="absolute inset-0 w-full-h-full">
					<NextImage
						src={bannerData?.image}
						imageClassName="object-cover object-[60%_36%]"
					/>
					<div className="absolute inset-0 w-full h-full bg-black/20" />
				</div>
				<div className="space-y-6 text-center text-white z-2">
					<h2 className="text-base font-medium tracking-widest text-white">
						{bannerData?.subtitle}
					</h2>
					<p className="text-2xl font-semibold tracking-wide text-white md:text-3xl font-playfair-display">
						{bannerData?.title}
					</p>
				</div>
			</div>
			<div className="container space-y-10 text-center">
				<Typography variant="p" className="mx-auto lg:max-w-9/10">
					At Pepper Green Wedding, passion and creativity drive everything we
					do. Our team is dedicated to capturing stunning, emotion-filled
					moments that you’ll cherish forever. When you choose us, you’re not
					just getting photographers—you’re getting a team that is professional,
					timely, attentive, and truly passionate about their craft.
				</Typography>
				<Link href="/films">
					<Button
						className="h-12 w-46.75 uppercase tracking-widest text-foreground/40 hover:text-foreground/40 border-foreground/40"
						variant="outline"
					>
						Wedding film
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default WeddingHero;
