type Testimonial = {
	id: string;
	image: string;
	alt: string | null;
	name: string;
	designation: string | null;
	testimonial: string;
};

type PageProps = {
   params: Promise<{ slug: string }>;
};