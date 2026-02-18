import PageHero from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import PhotoGallery from "@/features/user/stories/photo-gallery";
import React from "react";

const StoriesDetails = () => {
	return (
		<div>
			<PageHero
				imageSrc="https://images-pw.pixieset.com/elementfield/27271805/3dbc2b491435b4ab752a7ff28974ea52-8cd218f6.jpg"
				title="KAVYA YATIN"
				subtitle="View Gallery"
				shouldRenderCustomContent
				customContent={
					<div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col items-center justify-center gap-5 z-2">
						<h1 className="text-5xl tracking-wider font-semibold text-white font-playfair-display">
							KAVYA YATIN
						</h1>
                        <Button variant="outline" className="tracking-widest h-10 min-w-36.75">View Gallery</Button>
					</div>
				}
			/>
            <PhotoGallery />
		</div>
	);
};

export default StoriesDetails;
