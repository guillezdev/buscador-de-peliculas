import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    isLoading: false,
    films: [],
    page: 1
  },
  reducers: {
    startLoadingFilms: (state) => {
      state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.isLoading = false;
      state.films = action.payload.Search;
    },
    setPage:(state) => { 
      state.page += 1
      console.log(state.page);
     }
  },
});

export const { startLoadingFilms, setFilms ,setPage } = filmsSlice.actions;
export default filmsSlice.reducer;
