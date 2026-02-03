import BackgroundShade from "@/components/common/background-shade";
import NextImage from "@/components/ui/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
	return (
		<div className="space-y-20">
			<div className="min-h-[85vh] relative">
				<div className="absolute inset-0 w-full h-full z-1">
					<NextImage
						src="https://images-pw.pixieset.com/elementfield/27271805/3dbc2b491435b4ab752a7ff28974ea52-8cd218f6.jpg"
						imageClassName="object-cover"
					/>
				</div>
				<BackgroundShade className="z-2 bg-black/17" />
				<div className="absolute flex flex-col items-center justify-center w-full gap-5 -translate-x-1/2 z-2 left-1/2 top-2/3">
					<h1 className="text-5xl tracking-wider text-white font-playfair-display">
						About PEPPER GREEN
					</h1>
					<p className="text-base font-medium tracking-widest text-white uppercase">
						Get to know a little better
					</p>
				</div>
			</div>
			<div className="container grid grid-cols-2 gap-8 lg:gap-20">
				<NextImage
					src="https://images-pw.pixieset.com/elementfield/8KLRZvQ/1-f09ad40d-2500.jpg"
					className="aspect-[520/693]"
				/>
				<div className="my-auto">
					<h2 className="mb-5 text-4xl text-foreground/80 font-playfair-display">
						Sachin Sai
					</h2>
					<p>
						The founder of{" "}
						<span className="font-medium">Pepper Green Wedding Company</span> —
						a team of passionate creatives capturing timeless wedding stories
						across India and beyond. With over a decade of experience in the
						photography and cinematography industry, I’ve built a company that
						blends visual storytelling with emotion, culture, and elegance. I
						lead a dedicated team of 26 in-house professionals, each committed
						to delivering heartfelt and visually stunning wedding memories.
						<br />
						<br />
						{`As a passionate traveler who has explored over 15 countries, I draw
						inspiration from diverse cultures and landscapes, which reflects in
						our destination wedding work. Whether it's a traditional Kerala
						ceremony, a vibrant North Indian celebration, or a dreamy
						international affair — we bring authenticity, artistry, and heart to
						every frame.`}
						<br />
						<br />
						{`At Pepper Green, it's not just about clicking pictures — it's about
						preserving moments that last a lifetime.`}
					</p>
				</div>
			</div>
			<div className="container max-w-6xl">
				<h2 className="flex justify-center mb-6 font-playfair-display">
					Our Story
				</h2>
				<p>
					What started as a dream among a group of passionate individuals soon
					turned into one of the most sought-after wedding photography and
					cinematography teams in Kochi, Kerala, and beyond. When we combined
					our skills and vision, Pepper Green Wedding was born—a brand dedicated
					to storytelling through timeless photography and films
					<br />
					<br />
					We don’t believe in just claiming to be the best; instead, we let our
					work, creativity, and dedication speak for us. Every wedding we
					capture is a new opportunity to hone our craft and create magic,
					ensuring that your most precious moments are preserved with beauty and
					authenticity.
				</p>
			</div>
			<div className="container max-w-6xl">
				<h2 className="flex justify-center mb-6 font-playfair-display">
					What Makes Us Unique!
				</h2>
				<p className="pl-8 border-l border-muted-foreground/60 text-foreground">
					Have you ever dreamed of a love story straight out of a movie? Picture
					yourself in mesmerizing locations, with every moment captured in the
					most cinematic way possible. At Pepper Green Wedding, we turn that
					dream into reality!
				</p>
				<p className="pl-8 mt-6 border-l border-muted-foreground/60 text-foreground">
					As one of the best destination wedding photographers in India, Kerala,
					and beyond, we specialize in crafting wedding stories with
					breathtaking backdrops, stunning cinematography, and raw emotions. Our
					talented team of cinematographers and photographers is fully equipped
					to bring your vision to life—no matter how big or crazy your dreams
					are!
				</p>
				<p className="pl-8 mt-6 border-l border-muted-foreground/60 text-foreground">
					Every wedding we capture is deeply personal to us. We take time to
					understand our couples, ensuring that every frame reflects the true
					essence of their love story. It’s their trust that fuels our
					creativity and pushes us to create magic.
				</p>
			</div>
			<div className="container">
				<h2 className="mb-6 text-3xl font-playfair-display">Our Services</h2>
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
									If our photographs move you, our wedding films will take you
									on an emotional journey. We redefine traditional storytelling
									by crafting cinematic wedding films that capture the warmth,
									emotions, and magic of your big day. Relive every moment as if
									it happened just yesterday!
								</span>
								<span>
									Best Wedding Videography | Destination Wedding Films |
									Emotional Wedding Stories
								</span>
							</span>
						}
					/>
					<ServiceCard
						title="Concept Wedding"
						description={
							<span className="flex flex-col">
								<span>
									We believe that great design starts with a powerful concept.
									Our concept wedding photography adds personalized elements
									that showcase the unique personality of the bride and groom,
									making every frame visually and emotionally captivating.
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
									Luxury Wedding Albums | Fine Art Photo Books | Heirloom
									Wedding Memories
								</span>
							</span>
						}
					/>
					<ServiceCard
						title="Post Wedding Photography"
						description={
							<span className="flex flex-col">
								<span>
									Wedding days can be overwhelming, leaving little time for
									those dreamy, magazine-worthy shots. Our post-wedding shoots
									give you the chance to capture your love story without the
									rush, in stunning locations with creative concepts tailored
									just for you.
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
			<div className="container my-10 space-y-12 max-w-7xl">
				<h2 className="flex justify-center text-base font-normal tracking-widest uppercase font-google-sans-flex">
					As featured in
				</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        Femina Wedding
                    </Link>
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        Brides of kerala
                    </Link>
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        wedmegood
                    </Link>
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        wedding sutra
                    </Link>
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        wedding bazar
                    </Link>
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        wedding wire
                    </Link>
                    <Link href="#" className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display">
                        vogue
                    </Link>
                </div>
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
			<h3 className="text-xl tracking-widest uppercase font-playfair-display">
				{title}
			</h3>
			<p className="white-space-pre">{description}</p>
		</div>
	);
};

export default AboutPage;
