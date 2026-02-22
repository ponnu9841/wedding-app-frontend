import { fetchDataServer as fetchData } from "./fetch-data";

export const getBannersResponse = () => fetchData<Banner[] | null>("/banner");
