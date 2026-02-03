"use client";

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const CarouselSlider = ({
	images,
	carouselContentClassName,
	carouselItemClassName,
	cardContentClassName,
	cardClassName,
	children,
	orientation = "horizontal",
	id,
	togglerPosition = "default",
	showTitle = false,
	// enableScroll = false,
	loop = true,
	showTracker = false,
}: CarouselSliderProps) => {
	// const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }), Fade());
	const [api, setApi] = useState<CarouselApi | null>(null);
	const [current, setCurrent] = useState(1);
	const total = images?.length || 0;

	const opts = {
		loop,
	};

	const hasPadding = carouselItemClassName?.includes("pl-");
	let paddingValue = 0;
	if (hasPadding) {
		paddingValue = parseInt(carouselItemClassName?.split("pl-")[1] || "0") || 0;
	}

	const carousel = useRef<HTMLDivElement>(null);
	// const [api, setApi] = useState<any>(null); //eslint-disable-line

	//for tracker
	useEffect(() => {
		if (!api) return;

		// initial value
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	// useEffect(() => {
	// 	if (!api) return;

	// 	const handleScroll = (event: WheelEvent) => {
	// 		event.preventDefault();
	// 		if (event.deltaY > 0) {
	// 			api.scrollNext();
	// 		} else {
	// 			api.scrollPrev();
	// 		}
	// 	};

	// 	const currentCarousel = carousel.current;
	// 	if (currentCarousel && enableScroll) {
	// 		currentCarousel.addEventListener("wheel", handleScroll, {
	// 			passive: false,
	// 		});
	// 	}

	// 	return () => {
	// 		if (currentCarousel) {
	// 			currentCarousel.removeEventListener("wheel", handleScroll);
	// 		}
	// 	};
	// }, [api]); //eslint-disable-line

	return (
		<Carousel
			plugins={[Autoplay({ delay: 5000, stopOnInteraction: true }), Fade()]}
			className="relative w-full carousel"
			// onMouseEnter={plugin.current.stop}
			// onMouseLeave={plugin.current.reset}
			id={id || "carousel-slider"}
			orientation={orientation}
			opts={opts}
			ref={carousel}
			setApi={setApi}
		>
			<CarouselContent
				className={cn(
					"carousel-content w-full",
					`${paddingValue ? "-ml-" + paddingValue : "m-0"}`,
					carouselContentClassName,
				)}
			>
				{images?.map((image, index) => (
					<RenderCarouselItem
						key={index}
						cardContentClassName={cardContentClassName}
						carouselItemClassName={carouselItemClassName}
						cardClassName={cardClassName}
					>
						<Image
							src={image.image}
							fill
							alt="banner"
							className="object-cover"
							sizes="(min-width: 768px)100vw, 70vw"
							priority={index === 0}
						/>
						{!!children && children}
						{showTitle && (
							<>
								<div className="absolute left-0 w-full px-10 text-white md:bottom-20 space-y-7 z-4 top-2/3 md:top-63/100 md:px-32">
									{image.title && (
										<h1
											// variant="h1"
											className="text-3xl font-semibold tracking-wider text-center text-white md:text-5xl font-playfair-display"
											title={image.title}
											// animation="fadeInDown"
										>
											{image.title}
										</h1>
									)}
									{image.description && (
										<p
											// variant="p"
											className="max-w-4xl mx-auto tracking-widest text-center text-white"
											title={image.description}
											// animation="fadeInUp"
										>
											{image.description}
										</p>
									)}
								</div>
							</>
						)}
					</RenderCarouselItem>
				))}
				{!!!images && <>{!!children && children}</>}
			</CarouselContent>
			{(children || (images && images.length > 1)) && (
				<>
					<div className="absolute translate-y-1/2 left-40 md:left-40 z-3 bottom-20 md:bottom-30 md:top-100 text-foreground">
						<div className="relative">
							<CarouselPrevious />
						</div>
					</div>
					<div className="absolute translate-y-1/2 right-40 z-3 bottom-15 md:bottom-30 md:top-100 text-foreground">
						<div className="relative">
							<CarouselNext className="relative">
								<div className="absolute text-white -left-20 md:hidden top-1/4">
									<span>{`0${current}`}</span>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span>/</span>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span>{`0${total}`}</span>
								</div>
								<div className="absolute hidden font-light tracking-wider text-center text-white -translate-x-1/2 md:block -top-1 left-1/2">
									0{current}
								</div>

								<div className="absolute hidden font-light tracking-wider text-white -translate-x-1/2 md:block top-5 left-1/2">
									0{total}
								</div>
							</CarouselNext>
						</div>
					</div>
				</>
			)}
		</Carousel>
	);
};

const RenderCarouselItem = ({
	children,
	carouselItemClassName,
	cardClassName,
	cardContentClassName,
}: CarouselCardProps) => {
	const hasPadding = carouselItemClassName?.includes("pl-");
	let paddingValue = 0;
	if (hasPadding) {
		paddingValue = parseInt(carouselItemClassName?.split("pl-")[1] || "0") || 0;
	}

	return (
		<CarouselItem
			className={cn(
				"relative",
				`${paddingValue ? "pl-" + paddingValue : "p-0"}`,
				carouselItemClassName,
			)}
		>
			<Card className={cn("border-none p-0 h-full shadow-none", cardClassName)}>
				<CardContent
					className={cn("p-0 relative h-full", cardContentClassName)}
				>
					{!!children && children}
				</CardContent>
			</Card>
		</CarouselItem>
	);
};

export default CarouselSlider;
