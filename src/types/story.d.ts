type StoryImage = {
	id: string;
	imageUrl: string;
	order: number | null;
	storyId: string;
	createdAt: string;
};

type Story = {
	id: string;
	title: string;
	bannerImage: string;
	order: number | string | null;
	createdAt: string;
	updatedAt: string;
	images: StoryImage[];
};

type StoryResponse = PaginationResponse & {
	data: Story[];
};
