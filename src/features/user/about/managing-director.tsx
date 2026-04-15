import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
import React from "react";

const ManagingDirectorSection = ({
	data,
}: {
	data?: ManagingDirector | null;
}) => {
	if (!data) return null;

	return (
		<div className="container">
			<Typography
				variant="h2"
				className="flex justify-center text-base font-normal tracking-widest uppercase font-google-sans-flex mb-10 md:mb-14"
			>
				Managing Director
			</Typography>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:gap-16 items-center">
				<div className="md:col-span-2">
					<div className="relative overflow-hidden rounded-sm">
						<NextImage
							src={data.image}
							alt={data.alt || data.name}
							className="aspect-[4/5] w-full"
							imageClassName="object-cover"
							isUnOptimized
						/>
					</div>
				</div>
				<div className="md:col-span-3">
					<div className="border-l border-muted-foreground/60 pl-8">
						<Typography
							variant="h2"
							className="mb-4 text-foreground/80 font-playfair-display"
						>
							{data.name}
						</Typography>
						<div className="h-px w-16 bg-primary mb-6" />
						{data.description && (
							<Typography
								variant="p"
								className="text-foreground/80 whitespace-pre-line"
							>
								{data.description}
							</Typography>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManagingDirectorSection;
