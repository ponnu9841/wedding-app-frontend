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
}: {
	controller?: AbortController;
	pageNo: number;
	pageSize: number;
}) =>
	fetchData<StoryResponse>({
		url: `/story?page=${pageNo}&pageSize=${pageSize}`,
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
