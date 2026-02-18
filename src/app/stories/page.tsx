import StoriesHero from "@/features/user/stories/hero";
import StoriesList from "@/features/user/stories/stories-list";
import React from "react";

const StoriesPage = () => {
	return (
		<div className="container space-y-10">
			<div className="mt-40">
				<StoriesHero />
			</div>
            <StoriesList />
		</div>
	);
};

export default StoriesPage;
