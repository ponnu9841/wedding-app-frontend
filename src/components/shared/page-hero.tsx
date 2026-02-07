import React from "react";
import BackgroundShade from "@/components/shared/background-shade";
import NextImage from "@/components/ui/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
	imageSrc: string;
	title?: string;
	subtitle?: string;
	imageContainerClassName?: string;
	imageClassName?: string;
	containerClassName?: string; // e.g. "min-h-[85vh]"
	overlayClassName?: string; // e.g. "bg-black/20"
	contentPositionClassName?: string; // e.g. "top-2/3"
}

const PageHero: React.FC<PageHeroProps> = ({
	imageSrc,
	title,
	subtitle,
	containerClassName = "min-h-[85vh]",
	imageContainerClassName,
	imageClassName,
	overlayClassName = "bg-black/17",
	contentPositionClassName = "top-2/3",
}) => {
	return (
		<div className={`relative ${containerClassName}`}>
			{/* Background Image */}
			<div className="absolute inset-0 w-full h-full z-1">
				<NextImage
					src={imageSrc}
					className={cn(imageContainerClassName)}
					imageClassName={cn("object-cover", imageClassName)}
				/>
			</div>

			{/* Overlay */}
			<BackgroundShade className={cn("z-2", overlayClassName)} />

			{/* Content */}
			<div
				className={cn(
					`absolute left-1/2 z-2 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-5`,
					contentPositionClassName,
				)}
			>
				{title && (
					<h1 className="text-5xl tracking-wider text-white font-playfair-display">
						{title}
					</h1>
				)}

				{subtitle && (
					<p className="text-base font-medium tracking-widest text-white uppercase">
						{subtitle}
					</p>
				)}
			</div>
		</div>
	);
};

export default PageHero;
