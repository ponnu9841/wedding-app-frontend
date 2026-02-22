import Typography from "@/components/shared/typography";
import NextImage from "@/components/ui/image";
// import { capturingMoments } from "@/lib/const";

const WhyUs = ({ aboutImage }: { aboutImage: AboutImagesData | null }) => {
	const capturingMoments = [
		{
			image: aboutImage?.imageOne ?? "",
			alt: aboutImage?.imageOneAlt ?? "",
		},
		{
			image: aboutImage?.imageTwo ?? "",
			alt: aboutImage?.imageTwoAlt ?? "",
		},
		{
			image: aboutImage?.imageThree ?? "",
			alt: aboutImage?.imageThreeAlt ?? "",
		},
	];
	return (
		<div className="container space-y-15 md:space-y-20">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Typography variant="h2" className="mb-6 md:max-w-4/5 md:mb-0">
					{`Timeless Wedding Storytelling Crafted with Elegance`}
				</Typography>
				<Typography variant="p" className="leading-7">
					{`Celebrate Wedding Company approaches every wedding as a once in a lifetime story waiting to be told with honesty and depth. We focus on capturing natural emotions, quiet in between moments, and grand celebrations with equal care. From intimate glances to vibrant traditions, each frame is thoughtfully composed to reflect the personality of the couple. Our team works seamlessly behind the scenes, ensuring comfort and confidence while preserving memories in a way that feels immersive, heartfelt, and beautifully timeless for generations to cherish.`}
					{/* <br />
					<br />
					Best Wedding Photography in Kerala - Kochi - Bangalore | India | UK |
					Dubai Destination Wedding Photography | Candid & Traditional Wedding
					Films */}
				</Typography>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
				{capturingMoments.map((item, index) => (
					<NextImage
						src={item.image}
						key={index}
						className="aspect-[16/9]"
						imageClassName="object-cover"
						alt={item.alt}
					/>
				))}
			</div>
		</div>
	);
};

export default WhyUs;
