// import { testimonials } from "@/lib/constants";
import React from "react";
import TestimonialCard from "./testimonial-card";
import AnimatedTypography from "@/components/animation/animated-typography";
import CarouselSlider, { RenderCarouselItem } from "../slider/slider";

export default function Testimonials({
	testimonialsData,
}: {
	testimonialsData: Testimonial[];
}) {
	return (
		<section>
			{/* <h2 className="text-center uppercase pt-5 text-primary">Testimonials</h2> */}
			
			<div className="mt-6">
				<CarouselSlider
					id="testimonials-slider"
					carouselContentClassName="justify-center max-w-full"
					togglerPosition="bottom"
				>
					{testimonialsData.map((testimonial, index) => (
						<RenderCarouselItem
							key={index}
							// carouselItemClassName="basis-full"
							// cardClassName="bg-tranparent rounded-sm p-12 relative mb-4"
						>
							<TestimonialCard {...testimonial} />
						</RenderCarouselItem>
					))}
				</CarouselSlider>
			</div>
		</section>
	);
}
