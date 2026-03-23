import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getStories } from "@/services/axios/get-data-client";

const initialState: {
	pageSize: number;
	loading: boolean;
	storyListPageNo: number;
	data: StoryResponse | null;
	search: string;
	error: string;
} = {
	pageSize: 12,
	loading: true,
	storyListPageNo: 1,
	data: null,
	search: "",
	error: "",
};

export const fetchStories = createAsyncThunk(
	"fetchStories",
	async (
		{
			controller,
			isInfiniteLoad = true,
		}: { controller?: AbortController; isInfiniteLoad?: boolean },
		thunkAPI,
	) => {
		const storySlice = (thunkAPI.getState() as RootState).story;
		const pageNo = storySlice.storyListPageNo;
		const pageSize = storySlice.pageSize;
		const search = storySlice.search;

		const response = await getStories({ controller, pageNo, pageSize, search });
		const currentState = storySlice.data;

		if (currentState && pageNo !== 1 && isInfiniteLoad) {
			return {
				...currentState,
				data: [...currentState.data, ...(response?.data || [])],
			};
		}

		return response;
	},
);

export const storySlice = createSlice({
	name: "story",
	initialState,
	reducers: {
		setStorySearch(state, action) {
			state.search = action.payload;
			state.storyListPageNo = 1;
		},
		setStoryListPageNo(state, action) {
			state.storyListPageNo = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchStories.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchStories.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchStories.rejected, (state, action) => {
				state.loading = false;
				if (action.error.name === "TypeError") return;
				state.error = action.error.message as string;
			});
	},
});

export const { setStoryListPageNo, setStorySearch } = storySlice.actions;

export const getStoriesPageSize = (state: RootState) => state.story.pageSize;
export const getStoriesData = (state: RootState) => state.story.data;
export const getStoriesSearch = (state: RootState) => state.story.search;
export const getStoriesPageNo = (state: RootState) =>
	state.story.storyListPageNo;
export const getStoriesLoading = (state: RootState) => state.story.loading;

export default storySlice.reducer;
