import Typography from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/ui/image";
import { works } from "@/lib/const";

const FeaturedWorks = () => {
	return (
		<div className="space-y-10">
			<Typography variant="h2" className="text-center text-foreground/80">
				See My Work
			</Typography>
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
	);
};

export default FeaturedWorks;
