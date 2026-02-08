import NextImage from "@/components/ui/image";
import { stories } from "@/lib/const";

const StoriesList = () => {
	return (
		<div className="grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
			{stories.map((item, index) => (
				<div key={index}>
					<div className="apsect-[370/246]">
					    <NextImage
    						src={item.image}
    						className="aspect-[370/246]"
    						imageClassName="object-cover object-[20%_80%]"
    					/>
					</div>
					<div className="my-3">
						<h3 className="text-xl tracking-wide text-center uppercase font-playfair-display">
							{item.name}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export default StoriesList;
