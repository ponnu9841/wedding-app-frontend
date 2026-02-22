import AboutBrief from "@/features/user/home/about-brief";
import WeddingHero from "@/features/user/home/wedding-hero";
import WhyUs from "@/features/user/home/why-us";
import FeaturedWorks from "@/features/user/home/featured-works";
// import { bannerData } from "@/lib/const";
import FeaturedHero from "@/features/user/home/featured-hero";
import InstagramFollow from "@/features/user/home/instagram-follow";
import CarouselSlider from "@/features/user/home/banner-slider";
import VideoBanner from "@/features/user/home/video-banner";
import {
	getBannersResponse,
	getInstagramFollowResponse,
} from "@/services/axios/get-data-server";

export default async function Home() {
	const [bannerData, instagramFollow] = await Promise.all([
		getBannersResponse(),
		getInstagramFollowResponse(),
	]);

	return (
		<div className="mb-10 space-y-15 md:space-y-20">
			<CarouselSlider
				images={bannerData || []}
				cardContentClassName="min-h-screen relative"
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
			<InstagramFollow instagramFollowData={instagramFollow || []} />
		</div>
	);
}
