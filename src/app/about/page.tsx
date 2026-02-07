import NextImage from "@/components/ui/image";
import FeaturedList from "@/features/about/featured-list";
import Founder from "@/features/about/founder";
import AboutHero from "@/features/about/hero";
import OurStory from "@/features/about/our-story";
import AboutServices from "@/features/about/services";
import Testimonials from "@/features/about/testimonials";
import WhatMakesUsUnique from "@/features/about/what-makes-us-unique";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
	return (
		<div className="space-y-20">
			<AboutHero />
			<Founder />
			<OurStory />
			<WhatMakesUsUnique />
			<AboutServices />
			<FeaturedList />
			<Testimonials />
			{/* <Testimonials testimonialsData={testimonialsData} /> */}
		</div>
	);
};



export default AboutPage;
