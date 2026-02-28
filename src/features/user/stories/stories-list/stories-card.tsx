import NextImage from "@/components/ui/image";
import Link from "next/link";

const StoriesCard = (story: Story) => {
	return (
		<Link href={`stories/${story.id}`}>
			<div className="apsect-[370/246]">
				<NextImage
					src={story.images?.[0]?.imageUrl || "/placeholder.png"}
					className="aspect-[370/246]"
					imageClassName="object-cover object-[20%_80%]"
					isUnOptimized
				/>
			</div>
			<div className="my-3">
				<h3 className="text-xl tracking-wide text-center uppercase font-playfair-display">
					{story.title}
				</h3>
			</div>
		</Link>
	);
};

export default StoriesCard;
