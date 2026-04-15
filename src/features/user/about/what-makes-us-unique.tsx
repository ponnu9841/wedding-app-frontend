import Typography from "@/components/shared/typography";
import React from "react";

const WhatMakesUsUnique = ({
	data,
}: {
	data?: WhatMakesUsUniqueItem | null;
}) => {
	if (!data) return null;

	const paragraphs = (data.description || "")
		.split(/\n{2,}/)
		.map((p) => p.trim())
		.filter(Boolean);

	return (
		<div className="container max-w-6xl">
			<Typography
				variant="h2"
				className="flex justify-center mb-6 font-playfair-display"
			>
				{data.title}
			</Typography>
			{paragraphs.map((p, idx) => (
				<Typography
					key={idx}
					variant="p"
					className={`pl-8 border-l border-muted-foreground/60 text-foreground whitespace-pre-line ${
						idx > 0 ? "mt-6" : ""
					}`}
				>
					{p}
				</Typography>
			))}
		</div>
	);
};

export default WhatMakesUsUnique;
