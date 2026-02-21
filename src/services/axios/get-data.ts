import fetchData from "./fetch-data";

export const getBannersResponse = () => fetchData<Banner[] | null>("/banner");
