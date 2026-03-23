import FilmsHero from "@/features/user/films/films-hero";
import FilmsList from "@/features/user/films/films-list";

const FilmsPage = () => {
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
