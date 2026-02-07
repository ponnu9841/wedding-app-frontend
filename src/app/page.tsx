import { SectionSeperatorTop } from "@/components/sections/section-seperator";
import CarouselSlider from "@/components/sections/slider/slider";
import AboutBrief from "@/features/home/about-brief";
import WeddingHero from "@/features/home/wedding-hero";
import WhyUs from "@/features/home/why-us";
import FeaturedWorks from "@/features/home/featured-works";
import { banners } from "@/lib/const";
import FeaturedHero from "@/features/home/featured-hero";
import InstagramFollow from "@/features/home/instagram-follow";

export default function Home() {
	return (
		<div className="mb-10 space-y-20">
			<CarouselSlider
				images={banners}
				cardContentClassName="min-h-[85vh] relative"
				showTitle
				showTracker
			>
				<div className="absolute inset-0 w-full h-full bg-black/17" />
			</CarouselSlider>
			<WhyUs />
			<AboutBrief />
			<WeddingHero />
			{/* works */}
			<FeaturedWorks />
			<FeaturedHero />
			{/* instagram */}
			<InstagramFollow />

			<div className="relative">
				<SectionSeperatorTop className="text-primary" />
			</div>
		</div>
	);
}

// https://images-pw.pixieset.com/page/oabXdk/SRA_9738-79ad6b33-2500.jpg
