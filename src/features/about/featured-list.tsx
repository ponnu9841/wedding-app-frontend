import Link from "next/link";
import React from "react";

const FeaturedList = () => {
	return (
		<div className="container my-10 space-y-12 max-w-7xl">
			<h2 className="flex justify-center text-base font-normal tracking-widest uppercase font-google-sans-flex">
				As featured in
			</h2>
			<div className="flex flex-wrap justify-center gap-6">
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					Femina Wedding
				</Link>
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					Brides of kerala
				</Link>
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					wedmegood
				</Link>
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					wedding sutra
				</Link>
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					wedding bazar
				</Link>
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					wedding wire
				</Link>
				<Link
					href="#"
					className="text-xl tracking-wider uppercase text-foreground/75 font-playfair-display"
				>
					vogue
				</Link>
			</div>
		</div>
	);
};

export default FeaturedList;
