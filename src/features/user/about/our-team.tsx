import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
import React from "react";

const Team = ({
	data,
}: {
	data?: ManagingDirector[] | null;
}) => {
	if (!data || data.length === 0) return null;

	return (
		<div className="container">
			<Typography
				variant="h2"
				className="flex justify-center mb-6 font-playfair-display"
			>
				Our Team
			</Typography>
			<div className="space-y-16">
				{data.map((member, index) => (
					<div
						key={member.id}
						className={`grid grid-cols-1 gap-8 md:grid-cols-5 lg:gap-16 items-center ${
							index % 2 !== 0 ? "md:direction-rtl" : ""
						}`}
					>
						<div
							className={`md:col-span-2 ${
								index % 2 !== 0 ? "md:order-2" : ""
							}`}
						>
							<div className="relative overflow-hidden rounded-sm">
								<NextImage
									src={member.image}
									alt={member.alt || member.name}
									className="aspect-[4/5] w-full"
									imageClassName="object-cover"
									isUnOptimized
								/>
							</div>
						</div>
						<div
							className={`md:col-span-3 ${
								index % 2 !== 0 ? "md:order-1" : ""
							}`}
						>
							<div className="border-l border-muted-foreground/60 pl-8">
								<Typography
									variant="h2"
									className="mb-4 text-foreground/80 font-playfair-display"
								>
									{member.name}
								</Typography>
								<div className="h-px w-16 bg-primary mb-6" />
								{member.description && (
									<Typography
										variant="p"
										className="text-foreground/80 whitespace-pre-line"
									>
										{member.description}
									</Typography>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
