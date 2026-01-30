import CarouselSlider from "@/components/sections/slider/slider";

const banners: Banner[] = [
	{
		id: "1",
		image:
			"https://images-pw.pixieset.com/elementfield/OPLLOk/DSC00771-15de42a2-2500.jpg",
		title: "Capturing Love",
		description: "CREATING TIMELESS PHOTOS",
	},
	{
		id: "2",
		image:
			"https://images-pw.pixieset.com/elementfield/02440645/92051aaeea41d714e454a97349fc7886-dd499563.jpg",
		title: "Capturing Love",
		description: "STORIES FROM PEPPER GREEN",
	},
	{
		id: "3",
		image:
			"https://images-pw.pixieset.com/elementfield/OPLLOk/DSC00771-15de42a2-2500.jpg",
		title: "Capturing Love",
		description: "CREATING TIMELESS PHOTOS",
	},
	{
		id: "4",
		image:
			"https://images-pw.pixieset.com/elementfield/Vzkk8m/MVG02439-94b7ceb1-2500.jpg",
		title: "Capturing Love",
		description: "STORIES FROM PEPPER GREEN",
	},
];

export default function Home() {
	return (
		<div className="">
			<CarouselSlider
				images={banners}
				cardContentClassName="min-h-[70vh] lg:min-h-[85vh]"
        showTitle
        
			/>
		</div>
	);
}
