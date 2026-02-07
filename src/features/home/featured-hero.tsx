import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";

const FeaturedHero = () => {
	return (
		<div className="space-y-15">
			<div className="flex flex-col items-center justify-center gap-5">
				<h2 className="mx-auto text-center font-playfair-display max-w-3/5 text-foreground/80">
					“MY HEART OVERFLOWS WITH THE LOVE WE CREATED. IT FEELS LIKE SUNSHINE”
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
					<h2 className="mb-4 font-playfair-display text-white">
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
	);
};

export default FeaturedHero;
