import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    isLoading: false,
    films: [],
  },
  reducers: {
    startLoadingFilms : (state) => { 
        state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.isLoading = false;
      state.films = action.payload.Search;
    },
  },
});

export const { startLoadingFilms , setFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
