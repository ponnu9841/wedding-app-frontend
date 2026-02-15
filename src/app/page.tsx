import AboutBrief from "@/features/home/about-brief";
import WeddingHero from "@/features/home/wedding-hero";
import WhyUs from "@/features/home/why-us";
import FeaturedWorks from "@/features/home/featured-works";
import { banners } from "@/lib/const";
import FeaturedHero from "@/features/home/featured-hero";
import InstagramFollow from "@/features/home/instagram-follow";
import CarouselSlider from "@/features/home/banner-slider";
import VideoBanner from "@/features/home/video-banner";

export default function Home() {
	return (
		<div className="mb-10 space-y-15 md:space-y-20">
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
			<VideoBanner />
			{/* works */}
			<FeaturedWorks />
			<FeaturedHero />
			{/* instagram */}
			<InstagramFollow />
		</div>
	);
}

// https://images-pw.pixieset.com/page/oabXdk/SRA_9738-79ad6b33-2500.jpg
