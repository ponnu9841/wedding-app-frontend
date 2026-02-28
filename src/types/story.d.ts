type StoryImage = {
	id: string;
	imageUrl: string;
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
	images: Image[];
};

type StoryResponse = PaginationResponse & {
	data: Story[];
};
