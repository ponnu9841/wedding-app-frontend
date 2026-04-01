export const dynamic = "force-dynamic";

import FilmsHero from "@/features/user/films/films-hero";
import FilmsList from "@/features/user/films/films-list";
import { generatePageMetadata } from "@/lib/utils";

export const generateMetadata = () => generatePageMetadata("films");

const FilmsPage = async () => {
	return (
		<div className="space-y-20">
			<FilmsHero videoUrl="https://townin-storage.s3.eu-north-1.amazonaws.com/celebrate-wedding/films-banner.mp4" />
			<div className="container">
				<FilmsList />
			</div>
		</div>
	)
};

export default FilmsPage;
