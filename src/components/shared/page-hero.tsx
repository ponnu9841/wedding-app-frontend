import React from "react";
import BackgroundShade from "@/components/shared/background-shade";
import NextImage from "@/components/ui/image";
import { cn } from "@/lib/utils";
import Typography from "./typography";

interface PageHeroProps {
	imageSrc: string;
	title?: string;
	subtitle?: string;
	imageContainerClassName?: string;
	imageClassName?: string;
	containerClassName?: string; // e.g. "min-h-[85vh]"
	overlayClassName?: string; // e.g. "bg-black/20"
	contentPositionClassName?: string; // e.g. "top-2/3"
	shouldRenderCustomContent?: boolean;
	customContent?: React.ReactNode;
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
	shouldRenderCustomContent = false,
	customContent = "",
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
			{!shouldRenderCustomContent ? (
				<div
					className={cn(
						`absolute left-1/2 z-2 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-5`,
						contentPositionClassName,
					)}
				>
					{title && (
						<Typography variant="h1" className="tracking-wider text-center text-white font-playfair-display">
							{title}
						</Typography>
					)}

					{subtitle && (
						<Typography variant="p" className="font-medium tracking-widest text-white uppercase">
							{subtitle}
						</Typography>
					)}
				</div>
			) : (
				customContent
			)}
		</div>
	);
};

export default PageHero;
