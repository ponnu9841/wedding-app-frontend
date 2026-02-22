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
					title="Traditional Wedding"
					description={
						<span className="flex flex-col">
							<span>
								{`Traditional weddings have a timeless charm, where rituals and
    								heritage blend beautifully to create unforgettable moments. If
    								you cherish your roots and want your wedding photography to
    								reflect the culture, emotions, and traditions you hold dear,
    								you're in the right place`}
							</span>
							<span>
								Best Traditional Wedding Photography in Kerala | Kochi |
								Bangalore | India | UK | Dubai
							</span>
						</span>
					}
				/>
				<ServiceCard
					title="Wedding Films"
					description={
						<span className="flex flex-col">
							<span>
								If our photographs move you, our wedding films will take you on
								an emotional journey. We redefine traditional storytelling by
								crafting cinematic wedding films that capture the warmth,
								emotions, and magic of your big day. Relive every moment as if
								it happened just yesterday!
							</span>
							<span>
								Best Wedding Videography | Destination Wedding Films | Emotional
								Wedding Stories
							</span>
						</span>
					}
				/>
				<ServiceCard
					title="Concept Wedding"
					description={
						<span className="flex flex-col">
							<span>
								We believe that great design starts with a powerful concept. Our
								concept wedding photography adds personalized elements that
								showcase the unique personality of the bride and groom, making
								every frame visually and emotionally captivating.
							</span>
							<span>
								Creative Wedding Photography | Styled Wedding Shoots | Couple
								Storytelling
							</span>
						</span>
					}
				/>
				<ServiceCard
					title="Premium Photobook"
					description={
						<span className="flex flex-col">
							<span>
								A photo book isn’t just an album—it’s a time capsule of your
								love story. While digital photos may fade into memory, our
								premium handcrafted photo books ensure that your most precious
								moments are preserved for generations.
							</span>
							<span>
								Luxury Wedding Albums | Fine Art Photo Books | Heirloom Wedding
								Memories
							</span>
						</span>
					}
				/>
				<ServiceCard
					title="Post Wedding Photography"
					description={
						<span className="flex flex-col">
							<span>
								Wedding days can be overwhelming, leaving little time for those
								dreamy, magazine-worthy shots. Our post-wedding shoots give you
								the chance to capture your love story without the rush, in
								stunning locations with creative concepts tailored just for you.
							</span>
							<span>
								Post-Wedding & Destination Couple Shoots | Kerala | India |
								International
							</span>
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
