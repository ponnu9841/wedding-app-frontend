import { fetchDataClient as fetchData } from "./fetch-data";

export const getBannersResponse = (controller?: AbortController) =>
	fetchData<Banner[] | null>({ url: "/banner", controller });

export const getInstagramFollowResponse = (controller?: AbortController) =>
	fetchData<InstagramFollow[] | null>({ url: "/instagram-follow", controller });

export const getAboutImages = (controller?: AbortController) =>
	fetchData<AboutImagesData | null>({ url: "/about", controller });

export const getAboutBrief = (controller?: AbortController) =>
	fetchData<AboutBrief | null>({ url: "/about/brief", controller });
