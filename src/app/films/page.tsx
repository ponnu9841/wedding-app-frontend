export const dynamic = "force-dynamic";

import PageIntro from "@/components/shared/page-intro";
import FilmsHero from "@/features/user/films/films-hero";
import FilmsList from "@/features/user/films/films-list";
import { generatePageMetadata } from "@/lib/utils";
import { getPageHeroServer } from "@/services/axios/get-data-server";

export const generateMetadata = () => generatePageMetadata("films");

const DEFAULT_TITLE = "Films That Live Beyond the Day";
const DEFAULT_DESCRIPTION = `From the first glance to the final dance, our films bring your wedding day back to life with movement, sound, and emotion. Every film is crafted to feel immersive and true to your story, so you can relive the moments as they naturally unfolded.`;

const FilmsPage = async () => {
	const hero = await getPageHeroServer("films");

	return (
		<div className="space-y-20">
			<FilmsHero videoUrl="https://townin-storage.s3.eu-north-1.amazonaws.com/celebrate-wedding/films-banner.mp4" />
			<div className="container space-y-15">
				<PageIntro
					title={hero?.title || DEFAULT_TITLE}
					description={hero?.description || DEFAULT_DESCRIPTION}
				/>
				<FilmsList />
			</div>
		</div>
	);
};

export default FilmsPage;
