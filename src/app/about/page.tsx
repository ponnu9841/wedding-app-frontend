export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button";
// import Faq from "@/features/user/about/faq";
import FeaturedList from "@/features/user/about/featured-list";
import Founder from "@/features/user/about/founder";
import AboutHero from "@/features/user/about/hero";
import ManagingDirectorSection from "@/features/user/about/managing-director";
import OurStory from "@/features/user/about/our-story";
import AboutServices from "@/features/user/about/services";
import Testimonials from "@/features/user/about/testimonials";
import WhatMakesUsUnique from "@/features/user/about/what-makes-us-unique";
import { generatePageMetadata } from "@/lib/utils";
import {
	getAboutBannersServer,
	getAboutServicesServer,
	getFeaturedStoriesServer,
	getFoundersServer,
	getManagingDirectorsServer,
	getOurStoriesServer,
	getTestimonialsServer,
	getWhatMakesUsUniqueServer,
} from "@/services/axios/get-data-server";
import Link from "next/link";

export const generateMetadata = () => generatePageMetadata("about");

const AboutPage = async () => {
	const [
		founders,
		aboutBanners,
		ourStories,
		whatMakesUsUnique,
		aboutServices,
		testimonials,
		featuredStories,
		managingDirectors,
	] = await Promise.all([
		getFoundersServer(),
		getAboutBannersServer(),
		getOurStoriesServer(),
		getWhatMakesUsUniqueServer(),
		getAboutServicesServer(),
		getTestimonialsServer(),
		getFeaturedStoriesServer(),
		getManagingDirectorsServer(),
	]);

	return (
		<div className="space-y-15 md:space-y-20">
			<AboutHero data={aboutBanners?.[0] ?? null} />
			<Founder data={founders?.[0] ?? null} />
			<OurStory data={ourStories?.[0] ?? null} />
			<ManagingDirectorSection data={managingDirectors?.[0] ?? null} />
			<WhatMakesUsUnique data={whatMakesUsUnique?.[0] ?? null} />
			<AboutServices data={aboutServices} />
			<FeaturedList data={featuredStories} />
			<Testimonials data={testimonials} />
			<div className="flex justify-center mb-20 -mt-5">
				<Link href="/contact">
					<Button variant="outline" className="text-black/80 min-w-40">
						Contact Us
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default AboutPage;
