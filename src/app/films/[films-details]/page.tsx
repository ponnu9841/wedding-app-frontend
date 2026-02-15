import FilmsHero from "@/features/films/films-hero";
import React from "react";

const FilmsDetails = () => {
	return (
		<div className="space-y-20 mb-30">
			<div className="mt-33">
				<FilmsHero />
			</div>
			<div className="max-w-243.5 mx-auto space-y-3">
				<h1 className="text-3xl">Kriti Kharbanda and Pulkit Samrat, Delhi</h1>
				<p className="text-sm font-medium leading-6 text-foreground">
					From the very first call we had with Kriti and Pulkit we knew this one
					was going to be special.A full on Punjabi energy was expected but what
					took us by surprise was the emotional rollercoaster it turned out to
					be.
				</p>
			</div>
		</div>
	);
};

export default FilmsDetails;
