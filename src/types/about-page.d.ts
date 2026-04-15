type ManagingDirector = {
	id: string;
	image: string;
	alt: string | null;
	name: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type Founder = {
	id: string;
	image: string;
	alt: string | null;
	name: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type AboutBanner = {
	id: string;
	image: string;
	alt: string | null;
	title: string | null;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type OurStoryItem = {
	id: string;
	title: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type WhatMakesUsUniqueItem = {
	id: string;
	title: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type AboutServiceItem = {
	id: string;
	title: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
};

type TestimonialItem = {
	id: string;
	name: string;
	testimonial: string;
	image: string;
	createdAt: string;
	updatedAt: string;
};
