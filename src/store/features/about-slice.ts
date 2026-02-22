import { getAboutImages } from "@/services/axios/get-data-client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { handleThunkError } from "@/store/thunkErrorHandler";
import { type AxiosError } from "axios";

const initialState: {
	loading: boolean;
	data: AboutImagesData | null;
	error: string;
} = {
	loading: true,
	data: null,
	error: "",
};

export const fetchAboutImages = createAsyncThunk(
	"fetchAboutImages",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await getAboutImages(controller);
			return response ?? null;
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const aboutSlice = createSlice({
	name: "instagramFollow",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchAboutImages.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchAboutImages.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload ?? null;
		});
		builder.addCase(fetchAboutImages.rejected, (state, action) => {
			state.loading = false;
			if (action.error.name === "TypeError") return;
			state.error = action.error.message as string;
		});
	},
});

export const getAboutImagesData = (state: RootState) => state.about.data;

export default aboutSlice.reducer;
