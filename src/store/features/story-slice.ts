import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getStories } from "@/services/axios/get-data-client";

const initialState: {
	pageSize: number;
	loading: boolean;
	storyListPageNo: number;
	data: StoryResponse | null;
	error: string;
} = {
	pageSize: 10,
	loading: true,
	storyListPageNo: 1,
	data: null,
	error: "",
};

export const fetchStories = createAsyncThunk(
	"fetchStories",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		const storySlice = (thunkAPI.getState() as RootState).story;
		const pageNo = storySlice.storyListPageNo;
		const pageSize = storySlice.pageSize;

		const response = await getStories({ controller, pageNo, pageSize });
		const currentState = storySlice.data;

		if (currentState && pageNo !== 1) {
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

export const { setStoryListPageNo } = storySlice.actions;

export const getStoriesPageSize = (state: RootState) => state.story.pageSize;
export const getStoriesData = (state: RootState) => state.story.data;
export const getStoriesPageNo = (state: RootState) =>
	state.story.storyListPageNo;
export const getStoriesLoading = (state: RootState) => state.story.loading;

export default storySlice.reducer;
