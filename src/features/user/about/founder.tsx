import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
import React from "react";

const Founder = () => {
	return (
		<div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20">
			<NextImage
				src="https://images-pw.pixieset.com/elementfield/8KLRZvQ/1-f09ad40d-2500.jpg"
				className="aspect-[520/693]"
			/>
			<div className="my-auto">
				<Typography variant="h2" className="mb-5 text-4xl text-foreground/80 font-playfair-display">
					Sachin Sai
				</Typography>
				<Typography variant="p">
					The founder of{" "}
					<span className="font-medium">Pepper Green Wedding Company</span> — a
					team of passionate creatives capturing timeless wedding stories across
					India and beyond. With over a decade of experience in the photography
					and cinematography industry, I’ve built a company that blends visual
					storytelling with emotion, culture, and elegance. I lead a dedicated
					team of 26 in-house professionals, each committed to delivering
					heartfelt and visually stunning wedding memories.
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
				</Typography>
			</div>
		</div>
	);
};

export default Founder;
