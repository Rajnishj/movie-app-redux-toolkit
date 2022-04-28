import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Avengers";
    const res = await movieApi.get(`?apiKey=${APIKey}`, {
      params: {
        s: movieText,
        type: "movie",
      },
    });
    console.log(res);
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const movieText = "Friends";
    const res = await movieApi.get(`?apiKey=${APIKey}`, {
      params: {
        s: movieText,
        type: "series",
      },
    });

    return res.data;
  }
);
export const fetchAsyncSingleDetails = createAsyncThunk(
  "movies/fetchAsyncSingleDetails",
  async (id) => {
    const res = await movieApi.get(`?apiKey=${APIKey}`, {
      params: {
        i: id,
        plot: "full",
      },
    });

    return res.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: {
    //   reducer: (state, action) => {
    //     state.movies = action.payload;
    //   },
    // },

    removeSingleDetail: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetch SuccessFully");
      return {
        ...state,
        movies: action.payload,
      };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },

    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Fetch SuccessFully");
      return {
        ...state,
        shows: action.payload,
      };
    },
    [fetchAsyncSingleDetails.fulfilled]: (state, action) => {
      console.log("Fetch SuccessFully");
      return {
        ...state,
        selectedMovieOrShow: action.payload,
      };
    },
  },
});

export const { removeSingleDetail } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
