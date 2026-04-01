type HomeAboutBanner = {
	id: string;
	image: string;
	alt: string | null;
	title: string | null;
	subtitle: string | null;
	description: string | null;
	url: string | null;
};

type HomeVideoBanner = {
	id: string;
	bannerUrl: string;
}

type Work = {
	id: string;
	image: string;
	alt: string | null;
	title: string | null;
	subtitle: string | null;
	url: string | null;
}

type StoryBanner = {
	id: string;
	headingText: string;
	headingAuthor: string;
	title: string;
	eventDate: string;
	backgroundImage: string;
}
