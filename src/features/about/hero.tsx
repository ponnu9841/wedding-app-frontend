import BackgroundShade from "@/components/common/background-shade";
import NextImage from "@/components/ui/image";
import React from "react";

const AboutHero = () => {
	return (
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
	);
};

export default AboutHero;
