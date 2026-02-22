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
				<Typography
					variant="h2"
					className="mb-5 text-foreground/80 font-playfair-display"
				>
					Amal Joy Arkulasseril
				</Typography>
				<Typography variant="p">
					{`I’m Amal Joy Arkulasseril, the founder of CWC, established in 2017. After completing my M.Phil in Physical Education, I began my career as a Physical Education Teacher at a government school in Kerala, India. While the role was meaningful, I felt a strong pull toward a more creative path and chose to follow my passion.`}
					<br />
					<br />
					{`Starting from my hometown, Alappuzha, Kerala, I transitioned into wedding photography, where I discovered my true calling—capturing genuine emotions and real moments of happiness. What began as a personal journey gradually evolved into CWC, a growing team committed to authentic and heartfelt storytelling.`}
					<br />
					<br />
					{`Today, as I lead the company, I continue to personally shoot weddings, staying closely connected to the work I love and the moments that inspire me the most.`}
				</Typography>
			</div>
		</div>
	);
};

export default Founder;
