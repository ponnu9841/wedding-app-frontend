import Typography from "@/components/shared/typography";
import Link from "next/link";

const publications: string[] = [
	"Femina Wedding",
	"Brides of Kerala",
	"WedMeGood",
	"Wedding Sutra",
	"Wedding Bazar",
	"Wedding Wire",
	"Vogue",
];

const FeaturedList = () => {
	return (
		<div className="container my-10 space-y-6 md:space-y-12 max-w-7xl">
			<Typography
				variant="h2"
				className="flex justify-center text-base font-normal tracking-widest uppercase font-google-sans-flex"
			>
				As featured in
			</Typography>
			<div className="flex flex-wrap justify-center gap-6">
				{publications.map((item) => (
					<Link
						key={item}
						href="#"
						className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
					>
						{item}
					</Link>
				))}
				{/* <Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					Femina Wedding
				</Link>
				<Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					Brides of kerala
				</Link>
				<Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					wedmegood
				</Link>
				<Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					wedding sutra
				</Link>
				<Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					wedding bazar
				</Link>
				<Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					wedding wire
				</Link>
				<Link
					href="#"
					className="text-lg tracking-wider uppercase md:text-xl text-foreground/75 font-playfair-display"
				>
					vogue
				</Link> */}
			</div>
		</div>
	);
};

export default FeaturedList;
