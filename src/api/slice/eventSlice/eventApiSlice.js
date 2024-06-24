import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import { GET_EVENTS } from "../../endPoints";

// Async thunk for fetching events data

export const getEventsApi = createAsyncThunk(
  "eventApiSlice/getEventsApi",
  async (params) => {
    console.log("Get events", GET_EVENTS);
    const response = await axiosInstance.get(GET_EVENTS);
    console.log("response", response);
    return response.data;
  }
);

const eventApiSlice = createSlice({
  name: "eventApiSlice",
  initialState: {
    eventsData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventsApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEventsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.eventsData = action.payload.data;
        state.error = null;
      })
      .addCase(getEventsApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default eventApiSlice.reducer;
