import PageHero from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import PhotoGallery from "@/features/user/stories/photo-gallery";
import { getStoryById } from "@/services/axios/get-data-server";
import React from "react";

const StoriesDetails = async (props: PageProps) => {
	const params = await props.params;

	const story = params
		? await getStoryById((params.slug as string) || "")
		: null;

	if (!story) {
		return (
			<div className="min-h-screen flex justify-center items-center">
				<h1>Story not found</h1>
			</div>
		);
	}

	if (story) {
		return (
			<div className="space-y-4">
				<PageHero
					imageSrc={story.bannerImage}
					shouldRenderCustomContent
					customContent={
						<div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col items-center justify-center gap-5 z-2">
							<h1 className="text-5xl tracking-wider font-semibold text-white font-playfair-display text-center">
								{story.title}
							</h1>
							<Button
								variant="outline"
								className="tracking-widest h-10 min-w-36.75"
							>
								View Gallery
							</Button>
						</div>
					}
				/>
				<PhotoGallery story={story} />
			</div>
		);
	}
};

export default StoriesDetails;
