import { getInstagramFollowResponse } from "@/services/axios/get-data-client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { handleThunkError } from "@/store/thunkErrorHandler";
import { type AxiosError } from "axios";

const initialState: {
	loading: boolean;
	data: InstagramFollow[];
	error: string;
	selectedInstagramData: InstagramFollow | null;
} = {
	loading: true,
	data: [],
	error: "",
	selectedInstagramData: null,
};

export const fetchInstagramFollowData = createAsyncThunk(
	"fetchInstagramFollowData",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await getInstagramFollowResponse(controller);
			return response ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const instagramFollowSlice = createSlice({
	name: "instagramFollow",
	initialState,
	reducers: {
		setSelectedInstagramFollowData(state, action) {
			state.selectedInstagramData = action.payload;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchInstagramFollowData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchInstagramFollowData.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload ?? [];
		});
		builder.addCase(fetchInstagramFollowData.rejected, (state, action) => {
			state.loading = false;
			if (action.error.name === "TypeError") return;
			state.error = action.error.message as string;
		});
	},
});

export const { setSelectedInstagramFollowData } = instagramFollowSlice.actions;

export const getSelectedInstagramData = (state: RootState) =>
	state.instagram.selectedInstagramData;
export const getInstagramData = (state: RootState) => state.instagram.data;

export default instagramFollowSlice.reducer;
