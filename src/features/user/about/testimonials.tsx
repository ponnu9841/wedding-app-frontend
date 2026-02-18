"use client";

import CarouselWrapper from "@/components/shared/carousel-wrapper";
import {
	type CarouselApi,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import NextImage from "@/components/ui/image";
import { testimonialsData } from "@/lib/const";
import { useState } from "react";

const Testimonials = () => {
	const [api, setApi] = useState<CarouselApi | undefined | null>(null);
	const [current, setCurrent] = useState(1);

	const handleNavClick = (type: "prev" | "next") => {
		if (!api) return;
		if (type === "prev") {
			setCurrent(api.selectedScrollSnap() - 1);
			api.scrollPrev();
		}
		if (type === "next") {
			setCurrent(api.selectedScrollSnap() + 1);
			api.scrollNext();
		}
	};

	return (
		<CarouselWrapper
			id="testimonials-slider"
			carouselContentClassName="mb-20"
			setApi={setApi}
			carouselControls={
				<>
					{/* <CarouselPrevious className="absolute bottom-0 left-0 z-10 bg-red-900 top-100" />
					<CarouselNext className="absolute bottom-0 left-0 z-10 bg-red-900 top-100" /> */}
				</>
			}
		>
			{testimonialsData.map((item, index) => (
				<CarouselItem className="pl-0 basis-full" key={index}>
					<div className="grid grid-cols-1 md:grid-cols-2 md:min-h-150 lg:min-h-200">
						<div className="relative flex flex-col items-center h-full gap-10 pb-33 md:p-10 md:p-25 bg-background-alt">
							<div className="font-medium text-center">TESTIMONIALS</div>
							<NextImage
								src={item.image}
								imageClassName="object-cover"
								className="aspect-square md:hidden"
							/>
							<h2 className="text-xl text-center uppercase text-primary font-playfair-display">
								{item.name}
							</h2>
							<p className="mx-auto -mt-4 text-center md:mt-4 max-w-9/10 md:max-w-74/100">
								{item.testimonial}
							</p>
							<div className="flex items-center gap-2 w-fit absolute left-1/2 top-[calc(100%-5rem)] left-1/2 -translate-x-1/2">
								<CarouselPrevious
									className="absolute -translate-x-1/2 w-15 -left-13 md:w-20"
									arrowLineClassName="bg-foreground/40"
									arrowTipClassName="border-foreground/40"
									onClick={() => handleNavClick("prev")}
								/>
								<div className="text-foreground/40">{`${current} / ${testimonialsData.length}`}</div>
								<CarouselNext
									className="absolute -translate-x-1/2 left-20 md:w-20"
									arrowLineClassName="bg-foreground/40"
									arrowTipClassName="border-foreground/40"
									onClick={() => handleNavClick("next")}
								/>
							</div>
						</div>
						<NextImage
							src={item.image}
							imageClassName="object-cover hidden md:block"
						/>
					</div>
				</CarouselItem>
			))}
		</CarouselWrapper>
	);
};

export default Testimonials;
