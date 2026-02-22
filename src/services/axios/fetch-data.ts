import axiosInstance from "./axios-server-instance";
import axiosClient from ".";

async function fetchDataServer<T>(url: string): Promise<T | null> {
	try {
		const response = await axiosInstance.get(url);
		return response.data.data;
	} catch (error) {
		console.error(`Error fetching ${url}:`, error);
		return null;
	}
}

async function fetchDataClient<T>({
	url,
	controller,
}: FetchDataArgs): Promise<T | null> {
	try {
		const response = await axiosClient.get(url, {
			signal: controller?.signal,
		});
		return response.data.data;
	} catch (error) {
		console.error(`Error fetching ${url}:`, error);
		return null;
	}
}

export { fetchDataServer, fetchDataClient };
