import { fetchDataClient as fetchData } from "./fetch-data";

export const getBannersResponse = (controller?: AbortController) =>
	fetchData<Banner[] | null>({ url: "/banner", controller });

export const getInstagramFollowResponse = (controller?: AbortController) =>
	fetchData<InstagramFollow[] | null>({ url: "/instagram-follow", controller });

export const getAboutImages = (controller?: AbortController) =>
	fetchData<AboutImagesData | null>({ url: "/about", controller });

export const getAboutBrief = (controller?: AbortController) =>
	fetchData<AboutBrief | null>({ url: "/about/brief", controller });

export const getStories = ({
	controller,
	pageNo,
	pageSize,
	search,
}: {
	controller?: AbortController;
	pageNo: number;
	pageSize: number;
	search: string;
}) =>
	fetchData<StoryResponse>({
		url: `/story?page=${pageNo}&pageSize=${pageSize}&search=${search}`,
		controller,
	});

export const getFilms = ({
	controller,
	pageNo,
	pageSize,
}: {
	controller?: AbortController;
	pageNo: number;
	pageSize: number;
}) =>
	fetchData<FilmsResponse | null>({
		url: `/film?page=${pageNo}&pageSize=${pageSize}`,
		controller,
	});

export const getBlogs = ({
	controller,
	pageNo,
	pageSize,
}: {
	controller?: AbortController;
	pageNo: number;
	pageSize: number;
}) =>
	fetchData<BlogResponse>({
		url: `/blog?page=${pageNo}&pageSize=${pageSize}`,
		controller,
	});

export const getHomeAboutBanner = (controller?: AbortController) =>
	fetchData<HomeAboutBanner | null>({ url: "/home-about-banner", controller });

export const getHomeVideoBanner = (controller?: AbortController) =>
	fetchData<HomeVideoBanner | null>({ url: "/home-video-banner", controller });

export const getWorks = (controller?: AbortController) =>
	fetchData<Work[] | null>({ url: "/works", controller });

export const getStoryBanner = (controller?: AbortController) =>
	fetchData<StoryBanner | null>({ url: "/story-banner", controller });

export const getFoundersResponse = (controller?: AbortController) =>
	fetchData<Founder[] | null>({ url: "/founder", controller });

export const getManagingDirectorsResponse = (controller?: AbortController) =>
	fetchData<ManagingDirector[] | null>({
		url: "/managing-director",
		controller,
	});

export const getPageHeroResponse = ({
	page,
	controller,
}: {
	page: string;
	controller?: AbortController;
}) =>
	fetchData<PageHero | null>({
		url: `/page-hero?page=${encodeURIComponent(page)}`,
		controller,
	});

export const getAboutBannersResponse = (controller?: AbortController) =>
	fetchData<AboutBanner[] | null>({ url: "/about-banner", controller });

export const getOurStoriesResponse = (controller?: AbortController) =>
	fetchData<OurStoryItem[] | null>({ url: "/our-story", controller });

export const getWhatMakesUsUniqueResponse = (controller?: AbortController) =>
	fetchData<WhatMakesUsUniqueItem[] | null>({
		url: "/what-makes-us-unique",
		controller,
	});

export const getAboutServicesResponse = (controller?: AbortController) =>
	fetchData<AboutServiceItem[] | null>({ url: "/about-services", controller });

export const getTestimonialsResponse = (controller?: AbortController) =>
	fetchData<TestimonialItem[] | null>({ url: "/testimonials", controller });
