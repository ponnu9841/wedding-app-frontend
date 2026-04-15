type Testimonial = {
	id: string;
	image: string;
	alt: string | null;
	name: string;
	designation: string | null;
	testimonial: string;
};

type PageHero = {
	id: string;
	page: string;
	title: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type PageProps = {
   params: Promise<{ slug: string }>;
};