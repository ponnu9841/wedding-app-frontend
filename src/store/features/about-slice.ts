import {
	getAboutBrief,
	getAboutImages,
} from "@/services/axios/get-data-client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { handleThunkError } from "@/store/thunkErrorHandler";
import { type AxiosError } from "axios";

const initialState: {
	loading: boolean;
	aboutBriefLoading: boolean;
	data: AboutImagesData | null;
	aboutBrief: AboutBrief | null;
	error: string;
} = {
	loading: false,
	aboutBriefLoading: false,
	data: null,
	aboutBrief: null,
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

export const fetchAboutBrief = createAsyncThunk(
	"fetchAboutBrief",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await getAboutBrief(controller);
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
		builder
			.addCase(fetchAboutImages.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchAboutImages.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload ?? null;
			})
			.addCase(fetchAboutImages.rejected, (state, action) => {
				state.loading = false;
				if (action.error.name === "TypeError") return;
				state.error = action.error.message as string;
			});

		builder
			.addCase(fetchAboutBrief.pending, (state) => {
				state.aboutBriefLoading = true;
			})
			.addCase(fetchAboutBrief.fulfilled, (state, action) => {
				state.aboutBriefLoading = false;
				state.aboutBrief = action.payload ?? null;
			})
			.addCase(fetchAboutBrief.rejected, (state) => {
				state.aboutBriefLoading = false;
			});
	},
});

export const getAboutImagesData = (state: RootState) => state.about.data;
export const getAboutBriefData = (state: RootState) => state.about.aboutBrief;

export default aboutSlice.reducer;
