export const dynamic = "force-dynamic";

import AboutBrief from "@/features/user/home/about-brief";
import WeddingHero from "@/features/user/home/wedding-hero";
import WhyUs from "@/features/user/home/why-us";
import FeaturedWorks from "@/features/user/home/featured-works";
// import { bannerData } from "@/lib/const";
import StoryBannerSection from "@/features/user/home/story-banner";
import InstagramFollow from "@/features/user/home/instagram-follow";
import CarouselSlider from "@/features/user/home/banner-slider";
import VideoBanner from "@/features/user/home/video-banner";
import {
	getAboutBanner,
	getAboutBriefResponse,
	getAboutImagesResponse,
	getBannersResponse,
	getHomeVideoBanner,
	getInstagramFollowResponse,
	getStoryBanner,
	getWorks,
} from "@/services/axios/get-data-server";

export default async function Home() {
	const [
		bannerData,
		instagramFollow,
		aboutImages,
		aboutBrief,
		aboutBannerData,
		videoBanner,
		works,
		storyBanner,
	] = await Promise.all([
		getBannersResponse(),
		getInstagramFollowResponse(),
		getAboutImagesResponse(),
		getAboutBriefResponse(),
		getAboutBanner(),
		getHomeVideoBanner(),
		getWorks(),
		getStoryBanner(),
	]);

	return (
		<div className="mb-10 space-y-15 md:space-y-20">
			<CarouselSlider
				images={bannerData || []}
				cardContentClassName="min-h-[85vh] relative"
				showTitle
				showTracker
			>
				<div className="absolute inset-0 w-full h-full bg-black/17" />
			</CarouselSlider>
			<WhyUs aboutImage={aboutImages} />
			<AboutBrief videoUrl={aboutBrief?.videoUrl} />
			<WeddingHero bannerData={aboutBannerData} />
			<VideoBanner videoBanner={videoBanner} />
			{/* works */}
			<FeaturedWorks works={works} />
			<StoryBannerSection storyBanner={storyBanner} />
			{/* instagram */}
			<InstagramFollow instagramFollowData={instagramFollow || []} />
		</div>
	);
}
