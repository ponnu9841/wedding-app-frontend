import axiosInstance from "@/services/axios/axios-server-instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleThunkError } from "../thunkErrorHandler";
import { AxiosError } from "axios";
import { RootState } from "..";

const initialState: {
	loading: boolean;
	seoTags: Seo[];
	error: any; //eslint-disable-line
} = {
	loading: true,
	seoTags: [],
	error: "",
};

export const fetchSeo = createAsyncThunk(
	"fetchSeo",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await axiosInstance.get("/seo", {
				signal: controller?.signal,
			});
			return response.data.data;
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const seoSlice = createSlice({
	name: "seo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder
			.addCase(fetchSeo.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSeo.fulfilled, (state, action) => {
				state.loading = false;
				state.seoTags = action.payload;
			})
			.addCase(fetchSeo.rejected, (state, action) => {
				state.loading = false;
				if (action.error.name === "TypeError") return;
				state.error = action.error.message as string;
			});
	},
});

export const getSeoTags = (state: RootState) => state.seo.seoTags;

export default seoSlice.reducer;
