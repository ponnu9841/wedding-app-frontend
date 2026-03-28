import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
	getHomeAboutBanner,
	getHomeVideoBanner,
	getWorks,
} from "@/services/axios/get-data-client";
import { handleThunkError } from "../thunkErrorHandler";
import { AxiosError } from "axios";

const initialState: {
	homeAboutBanner: HomeAboutBanner | null;
	homeVideoBanner: HomeVideoBanner | null;
	works: Work[];
	selectedWork: Work | null;
	loading: {
		homeAboutBanner: boolean;
		homeVideoBanner: boolean;
		works: boolean;
	};
	error: {
		homeAboutBanner: string;
		homeVideoBanner: string;
		works: string;
	};
} = {
	loading: {
		homeAboutBanner: false,
		homeVideoBanner: false,
		works: false,
	},
	error: {
		homeAboutBanner: "",
		homeVideoBanner: "",
		works: "",
	},
	homeAboutBanner: null,
	homeVideoBanner: null,
	works: [],
	selectedWork: null,
};

export const fetchHomeAboutBanner = createAsyncThunk(
	"fetchHomeAboutBanner",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await getHomeAboutBanner(controller);
			return response;
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchHomeVideoBanner = createAsyncThunk(
	"fetchHomeVideoBanner",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await getHomeVideoBanner(controller);
			return response;
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchWorks = createAsyncThunk(
	"fetchWorks",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const response = await getWorks(controller);
			return response;
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setSelectedWork: (state, action) => {
			state.selectedWork = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHomeAboutBanner.pending, (state) => {
				state.loading.homeAboutBanner = true;
			})
			.addCase(fetchHomeAboutBanner.fulfilled, (state, action) => {
				state.loading.homeAboutBanner = false;
				state.homeAboutBanner = action.payload ?? null;
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
				state.homeVideoBanner = action.payload ?? null;
			})
			.addCase(fetchHomeVideoBanner.rejected, (state, action) => {
				state.loading.homeVideoBanner = false;
				state.error.homeVideoBanner =
					action.error.message || "Error fetching data";
			})

			.addCase(fetchWorks.pending, (state) => {
				state.loading.works = true;
			})
			.addCase(fetchWorks.fulfilled, (state, action) => {
				state.loading.works = false;
				state.works = action.payload ?? [];
			})
			.addCase(fetchWorks.rejected, (state, action) => {
				state.loading.works = false;
				state.error.works = action.error.message || "Error fetching data";
			});
	},
});

export const getHomeAboutBannerData = (state: RootState) =>
	state.home.homeAboutBanner;
export const getHomeVideoBannerData = (state: RootState) =>
	state.home.homeVideoBanner;
export const getWorksData = (state: RootState) => state.home.works;
export const getSelectedWork = (state: RootState) => state.home.selectedWork;

export const { setSelectedWork } = homeSlice.actions;

export default homeSlice.reducer;
