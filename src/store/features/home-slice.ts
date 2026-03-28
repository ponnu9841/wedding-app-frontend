import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
	getHomeAboutBanner,
	getHomeVideoBanner,
} from "@/services/axios/get-data-client";

const initialState: {
	homeAboutBanner: HomeAboutBanner | null;
	homeVideoBanner: HomeVideoBanner | null;
	loading: {
		homeAboutBanner: boolean;
		homeVideoBanner: boolean;
	};
	error: {
		homeAboutBanner: string;
		homeVideoBanner: string;
	};
} = {
	loading: {
		homeAboutBanner: false,
		homeVideoBanner: false,
	},
	error: {
		homeAboutBanner: "",
		homeVideoBanner: "",
	},
	homeAboutBanner: null,
	homeVideoBanner: null,
};

export const fetchHomeAboutBanner = createAsyncThunk(
	"fetchHomeAboutBanner",
	async (controller?: AbortController) => {
		const response = await getHomeAboutBanner(controller);
		return response;
	},
);

export const fetchHomeVideoBanner = createAsyncThunk(
	"fetchHomeVideoBanner",
	async (controller?: AbortController) => {
		const response = await getHomeVideoBanner(controller);
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
			})

			.addCase(fetchHomeVideoBanner.pending, (state) => {
				state.loading.homeVideoBanner = true;
			})
			.addCase(fetchHomeVideoBanner.fulfilled, (state, action) => {
				state.loading.homeVideoBanner = false;
				state.homeVideoBanner = action.payload;
			})
			.addCase(fetchHomeVideoBanner.rejected, (state, action) => {
				state.loading.homeVideoBanner = false;
				state.error.homeVideoBanner =
					action.error.message || "Error fetching data";
			});
	},
});

export const getHomeAboutBannerData = (state: RootState) =>
	state.home.homeAboutBanner;
export const getHomeVideoBannerData = (state: RootState) =>
	state.home.homeVideoBanner;

export default homeSlice.reducer;
