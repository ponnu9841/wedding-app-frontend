"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
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
}: CarouselSliderProps) => {
	// const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }), Fade());

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
			// setApi={setApi}
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
							sizes="(min-width: 768px)60vw, 70vw"
							priority={index === 0}
						/>
						{!!children && children}
						{showTitle && (
							<>
								<div className="absolute bottom-0 left-0 w-full px-10 space-y-4 text-white top-100 z-4 top-1/3 md:px-32">
									{image.title && (
										<h1
											// variant="h1"
											className="text-5xl tracking-wider text-center text-white font-playfair-display"
											title={image.title}
											// animation="fadeInDown"
										>
											{image.title}
										</h1>
									)}
									{image.description && (
										<p
											// variant="p"
											className="max-w-4xl mx-auto text-center"
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
					<CarouselPrevious
						className={
							togglerPosition === "default"
								? "left-20 z-3 bottom-0 top-100 text-foreground translate-y-1/2"
								: "bottom-0 left-1/2 -translate-x-[calc(50%+1.5rem)] z-3 translate-y-0 top-[calc(100%-3rem)] text-foreground"
						}
					/>
					<CarouselNext
						className={
							togglerPosition === "default"
								? "right-8 z-3 top-100 text-foreground translate-y-1/2"
								: "bottom-0 left-1/2 -translate-x-[calc(50%-1.5rem)] z-3 translate-y-0 top-[calc(100%-3rem)] text-foreground"
						}
					/>
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
