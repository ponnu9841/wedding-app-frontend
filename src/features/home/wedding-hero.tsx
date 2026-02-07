import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";

const WeddingHero = () => {
	return (
		<div className="space-y-15 bg-background-alt pb-20">
			<div className="h-71.5 md:h-122.25 lg:h-124 relative flex justify-center items-center">
				<div className="absolute inset-0 w-full-h-full">
					<NextImage
						src="https://images-pw.pixieset.com/elementfield/VzkkaP/DSC07652-7c858652-2500.JPG"
						imageClassName="object-cover object-[60%_36%]"
					/>
					<div className="absolute inset-0 w-full h-full bg-black/20" />
				</div>
				<div className="space-y-6 text-center text-white z-2">
					<h2 className="text-base tracking-widest text-white">
						WEDDING STORY
					</h2>
					<p className="text-3xl font-semibold tracking-wide text-white font-playfair-display">
						SUMAN & ELISABETTA
					</p>
				</div>
			</div>
			<div className="container space-y-10 text-center">
				<p className="mx-auto lg:max-w-9/10">
					At Pepper Green Wedding, passion and creativity drive everything we
					do. Our team is dedicated to capturing stunning, emotion-filled
					moments that you’ll cherish forever. When you choose us, you’re not
					just getting photographers—you’re getting a team that is professional,
					timely, attentive, and truly passionate about their craft.
				</p>
				<Button
					className="h-12 w-46.75 uppercase tracking-widest text-foreground/40 hover:text-foreground/40 border-foreground/40"
					variant="outline"
				>
					Wedding film
				</Button>
			</div>
		</div>
	);
};

export default WeddingHero;
