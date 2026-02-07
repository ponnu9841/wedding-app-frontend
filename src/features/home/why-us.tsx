import NextImage from "@/components/ui/image";
import { capturingMoments } from "@/lib/const";

const WhyUs = () => {
	return (
		<div className="container space-y-20">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<h2 className="text-3xl font-playfair-display max-w-4/5">
					Capturing Timeless Wedding Moments
				</h2>
				<p className="leading-7">
					A wedding is a collection of priceless moments that deserve to be
					cherished forever. While life doesn’t have a rewind button, wedding
					photography ensures you relive your special day over and over again.
					At Pepper Green Wedding, we specialize in capturing the beauty,
					emotions, and joy of your big day, preserving them as if they happened
					just yesterday.
					<br />
					<br />
					Best Wedding Photography in Kerala - Kochi - Bangalore | India | UK |
					Dubai Destination Wedding Photography | Candid & Traditional Wedding
					Films
				</p>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
				{capturingMoments.map((item, index) => (
					<NextImage
						src={item}
						key={index}
						className="aspect-[16/9]"
						imageClassName="object-cover"
					/>
				))}
			</div>
		</div>
	);
};

export default WhyUs;
