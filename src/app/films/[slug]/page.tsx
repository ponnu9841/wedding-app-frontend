import { Button } from "@/components/ui/button";
import FilmsHero from "@/features/user/films/films-hero";
import { getFilmById } from "@/services/axios/get-data-server";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FilmsDetails = async (props: PageProps) => {
	const params = await props.params;

	const film = params ? await getFilmById((params.slug as string) || "") : null;

	if (!film) {
		return (
			<div className="min-h-screen flex justify-center items-center">
				<h1>Film not found</h1>
			</div>
		);
	}

	return (
		<div className="space-y-20 mb-30">
			<div className="mt-33">
				<FilmsHero videoUrl={film.data?.videoUrl} />
			</div>
			<div className="max-w-243.5 mx-auto space-y-3">
				<h1 className="text-3xl">{film.data?.title}</h1>
				<p className="text-sm font-medium leading-6 text-foreground">
					{film.data?.shortDescription}
				</p>
				<div className="mt-6 flex justify-between items-center gap-6">
					{!!film.previousFilm && (
						<Link href={`/films/${film.previousFilm.id}`}>
							<Button variant="link" className="text-xl items-center">
								<ChevronLeft className="size-6" />
								{film.previousFilm.title}
							</Button>
						</Link>
					)}
					{!!film.nextFilm && (
						<Link href={`/films/${film.nextFilm.id}`} className="ml-auto">
							<Button variant="link" className="text-xl items-center">
								{film.nextFilm.title}
								<ChevronRight className="size-6" />
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default FilmsDetails;
