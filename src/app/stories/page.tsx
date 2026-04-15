export const dynamic = "force-dynamic";
import PageIntro from "@/components/shared/page-intro";
import StoriesList from "@/features/user/stories/stories-list/stories-list";
import { generatePageMetadata } from "@/lib/utils";
import { getPageHeroServer } from "@/services/axios/get-data-server";

export const generateMetadata = () => generatePageMetadata("story");

const DEFAULT_TITLE = "Stories Written in Every Frame";
const DEFAULT_DESCRIPTION = `A wedding day unfolds through countless meaningful moments. The excitement before the ceremony, the quiet glances, the joyful celebrations, and the emotions shared with family and friends. Through our lens, we preserve these memories with honesty and care, turning fleeting moments into timeless images you can revisit for years to come.`;

const StoriesPage = async () => {
	const hero = await getPageHeroServer("stories");

	return (
		<div className="container space-y-10">
			<div className="mt-40">
				<PageIntro
					title={hero?.title || DEFAULT_TITLE}
					description={hero?.description || DEFAULT_DESCRIPTION}
				/>
			</div>
			<StoriesList />
		</div>
	);
};

export default StoriesPage;
