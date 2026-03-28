import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getHomeAboutBanner } from "@/services/axios/get-data-client";

const initialState: {
	homeAboutBanner: HomeAboutBanner | null;
	loading: {
		homeAboutBanner: boolean;
	};
	error: {
		homeAboutBanner: string;
	};
} = {
	loading: {
		homeAboutBanner: false,
	},
	error: {
		homeAboutBanner: "",
	},
	homeAboutBanner: null,
};

export const fetchHomeAboutBanner = createAsyncThunk(
	"fetchHomeAboutBanner",
	async (controller?: AbortController) => {
		const response = await getHomeAboutBanner(controller);
		return response;
	},
);

const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHomeAboutBanner.pending, (state) => {
				state.loading.homeAboutBanner = true;
			})
			.addCase(fetchHomeAboutBanner.fulfilled, (state, action) => {
				state.loading.homeAboutBanner = false;
				state.homeAboutBanner = action.payload;
			})
			.addCase(fetchHomeAboutBanner.rejected, (state, action) => {
				state.loading.homeAboutBanner = false;
				state.error.homeAboutBanner =
					action.error.message || "Error fetching data";
			});
	},
});

export const getHomeAboutBannerData = (state: RootState) =>
	state.home.homeAboutBanner;

export default homeSlice.reducer;
