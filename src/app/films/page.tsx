export const dynamic = "force-dynamic";

import FilmsHero from "@/features/user/films/films-hero";
import FilmsList from "@/features/user/films/films-list";
import { generatePageMetadata } from "@/lib/utils";

export const generateMetadata = () => generatePageMetadata("films");

const FilmsPage = async () => {
	return (
		<div className="space-y-20">
			<FilmsHero videoUrl="https://www.youtube.com/embed/TOFye6sSv1I" />
			<div className="container">
				<FilmsList />
			</div>
		</div>
	)
};

export default FilmsPage;
