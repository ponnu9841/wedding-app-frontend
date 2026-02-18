import type { GetThunkAPI } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

export const handleThunkError = (
  thunkAPI: GetThunkAPI<any>, //eslint-disable-line
  error: AxiosError
) => {
  if (error.code === "ERR_CANCELED") return thunkAPI.rejectWithValue("");
  return thunkAPI.rejectWithValue(
    (error.response?.data as string) || error.message
  );
};
