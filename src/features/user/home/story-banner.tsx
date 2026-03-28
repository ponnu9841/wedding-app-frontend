import Typography from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";

const StoryBannerSection = ({
	storyBanner,
}: {
	storyBanner: StoryBanner | null;
}) => {
	if (!storyBanner) return null;

	return (
		<div className="space-y-15">
			<div className="flex flex-col items-center justify-center gap-5">
				<Typography
					variant="h2"
					className="px-3 mx-auto text-center md:max-w-3/5 text-foreground/80"
				>
					{`“${storyBanner.headingText}”`}
				</Typography>
				<div className="w-0.25 h-10 bg-foreground/20 hidden md:block" />
				<div className="text-sm tracking-widest text-foreground/80">
					{storyBanner.headingAuthor}
				</div>
			</div>
			<div className="h-131.25 md:h-150 relative flex items-center justify-start">
				<NextImage
					src={storyBanner.backgroundImage}
					imageClassName="object-cover object-[60%_42%]"
					className="absolute inset-0 w-full h-full z-1"
				/>
				<div className="px-5 text-white lg:px-20 z-2">
					<Typography variant="h2" className="mb-4 text-white">
						{storyBanner.title}
					</Typography>
					<p className="text-xs font-medium tracking-widest text-white uppercase">
						{storyBanner.eventDate}
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

export default StoryBannerSection;
