import Typography from "@/components/shared/typography";
import React from "react";

const AboutBrief = () => {
	return (
		<div className="container space-y-20">
			<div>
				<Typography variant="h2" className="mb-5 text-center text-foreground/80">
					About Us Brief
				</Typography>
				<Typography variant="p">
					At Pepper Green Wedding, we specialize in capturing beautiful,
					timeless moments that turn into treasured memories for a lifetime. Our
					frames are filled with real, raw emotions, ensuring that every time
					you look back, you relive the laughter, joy, and love of your special
					day.
				</Typography>
				<Typography variant="p" className="text-center">
					{`With a keen eye for detail and a passion for storytelling, our
						cameras never miss a moment. This dedication has made us one of the
						best wedding photographers in Kerala, Bangalore, and across India.
						Whether it's a destination wedding, candid photography, or
						traditional wedding films, we create visuals that bring your love
						story to life.`}
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
						src="https://player.vimeo.com/video/807039911?h=b983c4bc50"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						className="object-cover w-full h-full bg-black"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default AboutBrief;
