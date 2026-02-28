type Blog = {
	id: string;
	title: string;
	content: string;
	image: string;
	alt?: string | null;
	createdAt: string;
	updatedAt: string;
};

type BlogResponse = PaginationResponse & {
	data: Blog[] | [];
};
