type Film = {
	id: string;
	thumbnail: string;
	title: string;
	shortDescription: string;
	videoUrl: string;
	order: number | string | null;
	createdAt: string;
	updatedAt: string;
};

type FilmsResponse = PaginationResponse & {
	data: Film[];
};
