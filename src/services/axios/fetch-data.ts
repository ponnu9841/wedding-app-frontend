import axiosInstance from "./axios-server-instance";

async function fetchData<T>(url: string): Promise<T | null> {
	try {
		const response = await axiosInstance.get(url);
		return response.data.data;
	} catch (error) {
		console.error(`Error fetching ${url}:`, error);
		return null;
	}
}

export default fetchData;
