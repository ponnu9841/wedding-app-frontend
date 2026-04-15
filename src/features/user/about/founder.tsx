import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
import React from "react";

const Founder = ({ data }: { data?: Founder | null }) => {
	if (!data) return null;

	return (
		<div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20">
			<NextImage
				src={data.image}
				alt={data.alt || data.name}
				className="aspect-[520/693]"
				isUnOptimized
			/>
			<div className="my-auto">
				<Typography
					variant="h2"
					className="mb-5 text-foreground/80 font-playfair-display"
				>
					{data.name}
				</Typography>
				{data.description && (
					<Typography variant="p" className="whitespace-pre-line">
						{data.description}
					</Typography>
				)}
			</div>
		</div>
	);
};

export default Founder;
