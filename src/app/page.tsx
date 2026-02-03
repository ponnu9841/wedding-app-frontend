import { SectionSeperatorTop } from "@/components/sections/section-seperator";
import CarouselSlider from "@/components/sections/slider/slider";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";
import { banners, capturingMoments, instagram, works } from "@/lib/const";
import { Copy, Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="mb-10 space-y-20">
			<CarouselSlider
				images={banners}
				cardContentClassName="min-h-[85vh] relative"
				showTitle
				showTracker
			>
				<div className="absolute inset-0 w-full h-full bg-black/17" />
			</CarouselSlider>
			<div className="container space-y-20">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<h2 className="text-3xl font-playfair-display max-w-4/5">
						Capturing Timeless Wedding Moments
					</h2>
					<p className="leading-7">
						A wedding is a collection of priceless moments that deserve to be
						cherished forever. While life doesn’t have a rewind button, wedding
						photography ensures you relive your special day over and over again.
						At Pepper Green Wedding, we specialize in capturing the beauty,
						emotions, and joy of your big day, preserving them as if they
						happened just yesterday.
						<br />
						<br />
						Best Wedding Photography in Kerala - Kochi - Bangalore | India | UK
						| Dubai Destination Wedding Photography | Candid & Traditional
						Wedding Films
					</p>
				</div>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{capturingMoments.map((item, index) => (
						<NextImage
							src={item}
							key={index}
							className="aspect-[16/9]"
							imageClassName="object-cover"
						/>
					))}
				</div>
			</div>
			<div className="container space-y-20">
				<div>
					<h2 className="mb-5 text-3xl text-center font-playfair-display text-foreground/80">
						About Us Brief
					</h2>
					<p>
						At Pepper Green Wedding, we specialize in capturing beautiful,
						timeless moments that turn into treasured memories for a lifetime.
						Our frames are filled with real, raw emotions, ensuring that every
						time you look back, you relive the laughter, joy, and love of your
						special day.
					</p>
					<p className="text-center">
						{`With a keen eye for detail and a passion for storytelling, our
						cameras never miss a moment. This dedication has made us one of the
						best wedding photographers in Kerala, Bangalore, and across India.
						Whether it's a destination wedding, candid photography, or
						traditional wedding films, we create visuals that bring your love
						story to life.`}
					</p>
				</div>
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-8">
					<div className="md:col-span-3">
						<h2 className="mb-5 font-playfair-display text-foreground/80">
							MOST ROMANTIC EMOTIONAL WEDDING STORY
						</h2>
						<p>
							Goodbyes are never easy. As Sruthy steps into a new chapter with
							Rahul, her family holds back tears, cherishing the countless
							memories they’ve shared. For them, she is more than just a
							daughter, a sister, or a loved one—she is a part of their hearts.
							<br />
							This wedding film beautifully captures the raw emotions of love,
							longing, and bittersweet goodbyes, reminding us how deeply
							weddings touch our souls. As they try to hold back their tears,
							their love speaks louder than words.
						</p>
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
			<div className="space-y-15 bg-background-alt">
				<div className="h-71.5 md:h-122.25 lg:h-124 relative flex justify-center items-center">
					<div className="absolute inset-0 w-full-h-full">
						<NextImage
							src="https://images-pw.pixieset.com/elementfield/VzkkaP/DSC07652-7c858652-2500.JPG"
							imageClassName="object-cover object-[60%_36%]"
						/>
						<div className="absolute inset-0 w-full h-full bg-black/20" />
					</div>
					<div className="space-y-6 text-center text-white z-2">
						<h2 className="text-base tracking-widest">WEDDING STORY</h2>
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
						just getting photographers—you’re getting a team that is
						professional, timely, attentive, and truly passionate about their
						craft.
					</p>
					<Button
						className="h-12 w-46.75 uppercase tracking-widest text-foreground/40 hover:text-foreground/40 border-foreground/40"
						variant="outline"
					>
						Wedding film
					</Button>
				</div>
			</div>
			{/* works */}
			<div className="space-y-10">
				<h2 className="text-center font-playfair-display text-foreground/80">
					See My Work
				</h2>
				<div className="container grid grid-cols-1 gap-30 md:gap-20 md:grid-cols-3">
					{works.map((item, index) => (
						<div key={index} className="space-y-4 md:space-y-6 min-h-fit">
							<NextImage
								src={item.image}
								className="aspect-square md:aspect-[273/382]"
								imageClassName="object-cover"
							/>
							<h3 className="text-2xl font-medium text-center font-playfair-display">
								{item.title}
							</h3>
							<p className="text-sm font-normal text-center">{item.caption}</p>
						</div>
					))}
				</div>
				<div className="flex justify-center mt-40">
					<Button
						variant="outline"
						className="bg-transparent hover:bg-transparent h-12 w-60.25 text-foreground/40 hover:text-foreground/40 "
					>
						SEE MORE GALLERIES
					</Button>
				</div>
			</div>
			<div className="space-y-15">
				<div className="flex flex-col items-center justify-center gap-5">
					<h2 className="mx-auto text-center font-playfair-display max-w-3/5 text-foreground/80">
						“MY HEART OVERFLOWS WITH THE LOVE WE CREATED. IT FEELS LIKE
						SUNSHINE”
					</h2>
					<div className="w-0.25 h-10 bg-foreground/20" />
					<div className="text-sm tracking-widest text-foreground/80">
						RODOLFO EDUARDO
					</div>
				</div>
				<div className="h-131.25 md:h-150 relative flex items-center justify-start">
					<NextImage
						src="https://images-pw.pixieset.com/page/oabXdk/SRA_9738-79ad6b33-2500.jpg"
						imageClassName="object-cover object-[60%_42%]"
						className="absolute inset-0 w-full h-full z-1"
					/>
					<div className="px-5 text-white lg:px-20 z-2">
						<h2 className="mb-4 font-playfair-display">
							{`Unveiling the Magic of Bhagya and Prabhu's Haldi Ceremony: A Day of
							Love and Traditions`}
						</h2>
						<p className="text-xs font-medium tracking-widest text-white">
							MARCH 26, 2025
						</p>
					</div>
				</div>
				<div className="flex justify-center">
					<Button
						className="h-12 w-46.75 uppercase tracking-widest text-foreground/40 hover:text-foreground/40 border-foreground/40"
						variant="outline"
					>
						Book Now
					</Button>
				</div>
			</div>
			{/* instagram */}
			<div>
				<h2 className="flex justify-center mb-10 font-playfair-display">
					FOLLOW ME ON INSTAGRAM
				</h2>
				<div className="grid grid-cols-3 gap-4">
					{instagram.map((item, index) => (
						<Link
							href="https://www.instagram.com"
							target="_blank"
							className="relative aspect-square group"
							key={index}
						>
							<NextImage
								src={item.image}
								className="aspect-square"
								imageClassName="object-cover"
							/>
							<Copy className="absolute text-white top-3 right-3 size-8" />
							<div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-white/30 group-hover:opacity-100">
								<Instagram className="text-white size-5" />
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className="relative">
				<SectionSeperatorTop className="text-primary" />
			</div>

		</div>
	);
}

// https://images-pw.pixieset.com/page/oabXdk/SRA_9738-79ad6b33-2500.jpg
