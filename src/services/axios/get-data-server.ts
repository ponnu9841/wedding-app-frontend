import { fetchDataServer as fetchData } from "./fetch-data";

export const getBannersResponse = () => fetchData<Banner[] | null>("/banner");
export const getInstagramFollowResponse = () =>
	fetchData<InstagramFollow[] | null>("/instagram-follow");

export const getAboutImagesResponse = () =>
	fetchData<AboutImagesData | null>("/about");
