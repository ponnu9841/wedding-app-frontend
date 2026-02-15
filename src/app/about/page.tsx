import { Button } from "@/components/ui/button";
import Faq from "@/features/about/faq";
import FeaturedList from "@/features/about/featured-list";
import Founder from "@/features/about/founder";
import AboutHero from "@/features/about/hero";
import OurStory from "@/features/about/our-story";
import AboutServices from "@/features/about/services";
import Testimonials from "@/features/about/testimonials";
import WhatMakesUsUnique from "@/features/about/what-makes-us-unique";

const AboutPage = () => {
	return (
		<div className="space-y-15 md:space-y-20">
			<AboutHero />
			<Founder />
			<OurStory />
			<WhatMakesUsUnique />
			<AboutServices />
			<FeaturedList />
			<Testimonials />
			<div className="flex justify-center mb-20 -mt-20">
				<Button variant="outline" className="text-black/80 min-w-40">
					Contact Me
				</Button>
			</div>
			<Faq />
			{/* <Testimonials testimonialsData={testimonialsData} /> */}
		</div>
	);
};



export default AboutPage;
