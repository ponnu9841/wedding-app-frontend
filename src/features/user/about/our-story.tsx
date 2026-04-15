import Typography from "@/components/shared/typography";
import React from "react";

const OurStory = ({ data }: { data?: OurStoryItem | null }) => {
	if (!data) return null;

	return (
		<div className="container max-w-6xl">
			<Typography
				variant="h2"
				className="flex justify-center mb-6 font-playfair-display"
			>
				{data.title}
			</Typography>
			{data.description && (
				<Typography variant="p" className="whitespace-pre-line">
					{data.description}
				</Typography>
			)}
		</div>
	);
};

export default OurStory;
