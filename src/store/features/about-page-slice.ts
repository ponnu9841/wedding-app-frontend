import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { handleThunkError } from "@/store/thunkErrorHandler";
import { type AxiosError } from "axios";
import {
	getAboutBannersResponse,
	getAboutServicesResponse,
	getFoundersResponse,
	getOurStoriesResponse,
	getTestimonialsResponse,
	getWhatMakesUsUniqueResponse,
} from "@/services/axios/get-data-client";

type AboutPageState = {
	loading: boolean;
	error: string;

	founders: Founder[];
	selectedFounder: Founder | null;

	aboutBanners: AboutBanner[];
	selectedAboutBanner: AboutBanner | null;

	ourStories: OurStoryItem[];
	selectedOurStory: OurStoryItem | null;

	whatMakesUsUnique: WhatMakesUsUniqueItem[];
	selectedWhatMakesUsUnique: WhatMakesUsUniqueItem | null;

	aboutServices: AboutServiceItem[];
	selectedAboutService: AboutServiceItem | null;

	testimonials: TestimonialItem[];
	selectedTestimonial: TestimonialItem | null;
};

const initialState: AboutPageState = {
	loading: false,
	error: "",
	founders: [],
	selectedFounder: null,
	aboutBanners: [],
	selectedAboutBanner: null,
	ourStories: [],
	selectedOurStory: null,
	whatMakesUsUnique: [],
	selectedWhatMakesUsUnique: null,
	aboutServices: [],
	selectedAboutService: null,
	testimonials: [],
	selectedTestimonial: null,
};

export const fetchFounders = createAsyncThunk(
	"aboutPage/fetchFounders",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			return (await getFoundersResponse(controller)) ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchAboutBanners = createAsyncThunk(
	"aboutPage/fetchAboutBanners",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			return (await getAboutBannersResponse(controller)) ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchOurStories = createAsyncThunk(
	"aboutPage/fetchOurStories",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			return (await getOurStoriesResponse(controller)) ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchWhatMakesUsUnique = createAsyncThunk(
	"aboutPage/fetchWhatMakesUsUnique",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			return (await getWhatMakesUsUniqueResponse(controller)) ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchAboutServices = createAsyncThunk(
	"aboutPage/fetchAboutServices",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			return (await getAboutServicesResponse(controller)) ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const fetchTestimonials = createAsyncThunk(
	"aboutPage/fetchTestimonials",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			return (await getTestimonialsResponse(controller)) ?? [];
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

const aboutPageSlice = createSlice({
	name: "aboutPage",
	initialState,
	reducers: {
		setSelectedFounder: (state, action) => {
			state.selectedFounder = action.payload;
		},
		setSelectedAboutBanner: (state, action) => {
			state.selectedAboutBanner = action.payload;
		},
		setSelectedOurStory: (state, action) => {
			state.selectedOurStory = action.payload;
		},
		setSelectedWhatMakesUsUnique: (state, action) => {
			state.selectedWhatMakesUsUnique = action.payload;
		},
		setSelectedAboutService: (state, action) => {
			state.selectedAboutService = action.payload;
		},
		setSelectedTestimonial: (state, action) => {
			state.selectedTestimonial = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFounders.fulfilled, (state, action) => {
				state.founders = action.payload ?? [];
			})
			.addCase(fetchAboutBanners.fulfilled, (state, action) => {
				state.aboutBanners = action.payload ?? [];
			})
			.addCase(fetchOurStories.fulfilled, (state, action) => {
				state.ourStories = action.payload ?? [];
			})
			.addCase(fetchWhatMakesUsUnique.fulfilled, (state, action) => {
				state.whatMakesUsUnique = action.payload ?? [];
			})
			.addCase(fetchAboutServices.fulfilled, (state, action) => {
				state.aboutServices = action.payload ?? [];
			})
			.addCase(fetchTestimonials.fulfilled, (state, action) => {
				state.testimonials = action.payload ?? [];
			});
	},
});

export const {
	setSelectedFounder,
	setSelectedAboutBanner,
	setSelectedOurStory,
	setSelectedWhatMakesUsUnique,
	setSelectedAboutService,
	setSelectedTestimonial,
} = aboutPageSlice.actions;

export const getFounders = (s: RootState) => s.aboutPage.founders;
export const getSelectedFounder = (s: RootState) => s.aboutPage.selectedFounder;

export const getAboutBanners = (s: RootState) => s.aboutPage.aboutBanners;
export const getSelectedAboutBanner = (s: RootState) =>
	s.aboutPage.selectedAboutBanner;

export const getOurStories = (s: RootState) => s.aboutPage.ourStories;
export const getSelectedOurStory = (s: RootState) =>
	s.aboutPage.selectedOurStory;

export const getWhatMakesUsUnique = (s: RootState) =>
	s.aboutPage.whatMakesUsUnique;
export const getSelectedWhatMakesUsUnique = (s: RootState) =>
	s.aboutPage.selectedWhatMakesUsUnique;

export const getAboutServices = (s: RootState) => s.aboutPage.aboutServices;
export const getSelectedAboutService = (s: RootState) =>
	s.aboutPage.selectedAboutService;

export const getTestimonials = (s: RootState) => s.aboutPage.testimonials;
export const getSelectedTestimonial = (s: RootState) =>
	s.aboutPage.selectedTestimonial;

export default aboutPageSlice.reducer;
