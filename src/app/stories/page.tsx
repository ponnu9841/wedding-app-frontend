export const dynamic = "force-dynamic";
import StoriesHero from "@/features/user/stories/hero";
import StoriesList from "@/features/user/stories/stories-list/stories-list";
import { generatePageMetadata } from "@/lib/utils";

export const generateMetadata = () => generatePageMetadata("story");

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
