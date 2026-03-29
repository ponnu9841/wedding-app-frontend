import Typography from "@/components/shared/typography";
import React from "react";

const AboutServices = () => {
	return (
		<div className="container">
			<Typography variant="h2" className="mb-6">
				Our Services
			</Typography>
			<div className="space-y-6">
				<ServiceCard
					title="Wedding Photography"
					description={
						<span className="flex flex-col">
							<span>
								{`Your wedding day is a collection of moments that deserve to be preserved with honesty and elegance. We focus on capturing genuine emotions, meaningful rituals, and the subtle in-between moments that often go unnoticed. Every frame is thoughtfully composed to reflect your story in a timeless and personal way.
`}
							</span>
							{/* <span>
								Best Traditional Wedding Photography in Kerala | Kochi |
								Bangalore | India | UK | Dubai
							</span> */}
						</span>
					}
				/>
				<ServiceCard
					title="Wedding Films"
					description={
						<span className="flex flex-col">
							<span>
								Our wedding films bring your day back to life with movement, sound, and emotion. From heartfelt vows to joyful celebrations, we craft cinematic films that let you relive every moment as it naturally unfolded. Each film is designed to feel immersive, emotional, and true to your story.
							</span>
							{/* <span>
								Best Wedding Videography | Destination Wedding Films | Emotional
								Wedding Stories
							</span> */}
						</span>
					}
				/>
				<ServiceCard
					title="Signature Portrait Sessions"
					description={
						<span className="flex flex-col">
							<span>
								Every couple has a unique story, and our portrait sessions are designed to reflect that individuality. With carefully planned concepts, locations, and styling, we create visually striking images that feel both personal and artistic, capturing your connection in a refined and expressive way.
							</span>
							{/* <span>
								Creative Wedding Photography | Styled Wedding Shoots | Couple
								Storytelling
							</span> */}
						</span>
					}
				/>
				<ServiceCard
					title="Premium Wedding Albums"
					description={
						<span className="flex flex-col">
							<span>
								Your memories deserve more than a digital screen. Our premium albums are thoughtfully designed and handcrafted to preserve your wedding story in a tangible form. With premium materials and elegant layouts, each album becomes a lasting keepsake you can revisit for generations.
							</span>
							{/* <span>
								Luxury Wedding Albums | Fine Art Photo Books | Heirloom Wedding
								Memories
							</span> */}
						</span>
					}
				/>
				<ServiceCard
					title="Pre Wedding and Post Wedding Shoots"
					description={
						<span className="flex flex-col">
							<span>
								These sessions give you the space to celebrate your story beyond the wedding day. Without the time constraints of the event, we create relaxed and visually rich shoots in carefully chosen locations. The result is a collection of images that feel natural, expressive, and beautifully composed.
							</span>
							{/* <span>
								Post-Wedding & Destination Couple Shoots | Kerala | India |
								International
							</span> */}
						</span>
					}
				/>
			</div>
		</div>
	);
};

const ServiceCard = ({
	title,
	description,
}: {
	title: string;
	description: string | React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-lg md:text-xl tracking-widest uppercase font-playfair-display">
				{title}
			</h3>
			<Typography variant="p" className="white-space-pre">{description}</Typography>
		</div>
	);
};

export default AboutServices;
