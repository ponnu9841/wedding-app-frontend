import Typography from "@/components/shared/typography";
import React from "react";

const WhatMakesUsUnique = () => {
	return (
		<div className="container max-w-6xl">
			<Typography variant="h2" className="flex justify-center mb-6 font-playfair-display">
				What Makes Us Unique!
			</Typography>
			<Typography variant="p" className="pl-8 border-l border-muted-foreground/60 text-foreground">
				Have you ever wanted your wedding to be remembered not just as a day, but as a feeling you can return to? At Celebrate Wedding Company, we focus on capturing weddings in a way that feels real, immersive, and deeply personal. Every moment is approached with intention, ensuring your story is told with honesty, elegance, and emotion.
			</Typography>
			<Typography variant="p" className="pl-8 mt-6 border-l border-muted-foreground/60 text-foreground">
				With experience across diverse cultures and destinations, we bring a balanced approach that blends artistic vision with technical precision. Our team works quietly in the background, allowing moments to unfold naturally while we preserve them with care. From subtle glances to grand celebrations, we capture it all without disrupting the flow of your day.
			</Typography>
			<Typography variant="p" className="pl-8 mt-6 border-l border-muted-foreground/60 text-foreground">
				What truly sets us apart is the connection we build with every couple. We take the time to understand your story, your style, and what matters most to you. That trust allows us to create work that feels genuine and meaningful, resulting in memories that are not just seen, but truly felt for years to come.
			</Typography>
		</div>
	);
};

export default WhatMakesUsUnique;
