import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { handleThunkError } from "../thunkErrorHandler";
import { AxiosError } from "axios";
import { getBlogs } from "@/services/axios/get-data-client";

const initialState: {
	loading: boolean;
	blogs: BlogResponse | null;
	selectedBlog: Blog | null;
	pageNo: number;
	error: any; //eslint-disable-line
	pageSize: number;
} = {
	loading: true,
	blogs: null,
	pageNo: 1,
	selectedBlog: null,
	error: "",
	pageSize: 10,
};

export const fetchBlogs = createAsyncThunk(
	"fetchBlogs",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		try {
			const blogThunk = (thunkAPI.getState() as RootState).blog;
			const { pageNo, pageSize } = blogThunk;

			const response = await getBlogs({ controller, pageNo, pageSize });

			return response;
		} catch (error) {
			handleThunkError(thunkAPI, error as AxiosError);
		}
	},
);

export const blogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {
		setSelectedBlog(state, action) {
			state.selectedBlog = action.payload;
		},
		setBlogPageNo(state, action) {
			state.pageNo = action.payload;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder
			.addCase(fetchBlogs.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchBlogs.fulfilled, (state, action) => {
				state.loading = false;
				state.blogs = action.payload ?? null;
			})
			.addCase(fetchBlogs.rejected, (state, action) => {
				state.loading = false;
				if (action.error.name === "TypeError") return;
				state.error = action.error.message as string;
			});
	},
});

export const { setSelectedBlog, setBlogPageNo } = blogSlice.actions;

export default blogSlice.reducer;

export const getBlogData = (state: RootState) => state.blog.blogs;
export const getBlogLoading = (state: RootState) => state.blog.loading;
export const getBlogError = (state: RootState) => state.blog.error;
export const getSelectedBlog = (state: RootState) => state.blog.selectedBlog;
export const getBlogPageNo = (state: RootState) => state.blog.pageNo;
