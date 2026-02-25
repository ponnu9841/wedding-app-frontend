import Typography from "@/components/shared/typography";
import React from "react";

const AboutBrief = ({ videoUrl }: { videoUrl?: string | null }) => {
	return (
		<div className="container space-y-20">
			<div>
				<Typography
					variant="h2"
					className="mb-5 text-center text-foreground/80"
				>
					About Us Brief
				</Typography>
				<Typography variant="p">
					{`Founded in 2017 by Amal Joy Arukulasseril, Celebrate Wedding Company is a premium wedding photography and cinematography brand recognized for refined storytelling and timeless visuals. Having captured over 500+ weddings across India and Canada, we understand diverse cultures, traditions, and celebrations. Our experience allows us to document each wedding with sensitivity, elegance, and a deep respect for every couple’s unique story.`}
				</Typography>
				<Typography variant="p" className="text-center">
					{`We specialize exclusively in weddings, focusing on authentic emotions, graceful details, and cinematic moments. Our work blends artistic vision with technical expertise to create imagery that feels personal and enduring. Guided by a passionate and detail-oriented team, we deliver a seamless luxury experience, preserving your most meaningful moments with sophistication, care, and excellence.`}
				</Typography>
			</div>
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-8">
				<div className="md:col-span-3">
					<Typography variant="h2" className="mb-5 text-foreground/80">
						MOST ROMANTIC EMOTIONAL WEDDING STORY
					</Typography>
					<Typography variant="p">
						Goodbyes are never easy. As Sruthy steps into a new chapter with
						Rahul, her family holds back tears, cherishing the countless
						memories they’ve shared. For them, she is more than just a daughter,
						a sister, or a loved one—she is a part of their hearts.
						<br />
						This wedding film beautifully captures the raw emotions of love,
						longing, and bittersweet goodbyes, reminding us how deeply weddings
						touch our souls. As they try to hold back their tears, their love
						speaks louder than words.
					</Typography>
				</div>
				<div className="md:col-span-5">
					<iframe
						title="vimeo-player"
						src={videoUrl || ""}
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						className="object-cover w-full h-full bg-black"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default AboutBrief;
