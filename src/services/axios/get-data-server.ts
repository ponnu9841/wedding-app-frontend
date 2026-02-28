import { fetchDataServer as fetchData } from "./fetch-data";

type FilmById = {
	id: string;
	title: string;
};
type FilmResponseById = {
	data: Film | null;
	nextFilm: FilmById | null;
	previousFilm: FilmById | null;
};

export const getBannersResponse = () => fetchData<Banner[] | null>("/banner");
export const getInstagramFollowResponse = () =>
	fetchData<InstagramFollow[] | null>("/instagram-follow");

export const getAboutImagesResponse = () =>
	fetchData<AboutImagesData | null>("/about");

export const getAboutBriefResponse = () =>
	fetchData<AboutBrief | null>("/about/brief");

export const getStoryById = (id: string) =>
	fetchData<Story | null>(`/story/${id}`);

export const getFilmById = (id: string) =>
	fetchData<FilmResponseById>(`/film/${id}`);

export const getBlogById = (id: string) =>
	fetchData<Blog | null>(`/blog/${id}`);
