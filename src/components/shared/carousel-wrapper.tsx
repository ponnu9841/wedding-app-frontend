import React from "react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { cn } from "@/lib/utils";
import { getPaddingValue } from "@/lib/const";

type CarouselWrapperProps = {
	children: React.ReactNode;
	carouselControls?: React.ReactNode;
	carouselContentClassName?: string;
	id?: string;
	orientation?: "horizontal" | "vertical";
	paddingValue?: number;
	setApi?: (api: CarouselApi) => void;
};

const CarouselWrapper = ({
	id,
	carouselContentClassName,
	carouselControls,
	children,
	orientation,
	paddingValue,
	setApi,
}: CarouselWrapperProps) => {
	const opts = {
		loop: true,
	};

	return (
		<Carousel
			plugins={[Autoplay({ delay: 5000, stopOnInteraction: true }), Fade()]}
			className="w-full carousel"
			// onMouseEnter={plugin.current.stop}
			// onMouseLeave={plugin.current.reset}
			id={id || "carousel-slider"}
			orientation={orientation}
			opts={opts}
			setApi={setApi}
		>
			<CarouselContent
				className={cn(
					"carousel-content w-full",
					`${paddingValue ? getPaddingValue(paddingValue) : "m-0"}`,
					carouselContentClassName,
				)}
			>
				{children}
			</CarouselContent>
			{carouselControls}
		</Carousel>
	);
};

export default CarouselWrapper;
