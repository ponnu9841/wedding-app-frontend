import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getFilms } from "@/services/axios/get-data-client";

const initialState: {
	pageSize: number;
	pageNo: number;
	data: FilmsResponse | null;
	selectedFilm: Film | null;
	loading: boolean;
	error: string;
} = {
	pageSize: 10,
	pageNo: 1,
	data: null,
	selectedFilm: null,
	loading: false,
	error: "",
};

export const fetchFilms = createAsyncThunk(
	"fetchFilms",
	async ({ controller }: { controller?: AbortController }, thunkAPI) => {
		const filmsthunk = (thunkAPI.getState() as RootState).films;

		const { pageNo, pageSize } = filmsthunk;
		const response = await getFilms({ controller, pageNo, pageSize });
		return response;
	},
);

const filmsSlice = createSlice({
	name: "films",
	initialState,
	reducers: {
		setSelectedFilm: (state, action) => {
			state.selectedFilm = action.payload;
		},
		setFilmsPageNo: (state, action) => {
			state.pageNo = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilms.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchFilms.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchFilms.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Error fetching data";
			});
	},
});

export const { setSelectedFilm, setFilmsPageNo } = filmsSlice.actions;

export const getFilmsData = (state: RootState) => state.films.data;
export const getSelectedFilmData = (state: RootState) =>
	state.films.selectedFilm;

export default filmsSlice.reducer;
