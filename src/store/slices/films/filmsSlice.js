import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    isLoading: false,
    films: [],
    page: 1,
    type: ''
  },
  reducers: {
    startLoadingFilms: (state) => {
      state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.isLoading = false;
      state.films = action.payload.Search;
    },
    setPage: (state, action) => {
      state.page += 1
      console.log(state.page);
    },
    setResetPage: (state) => {
      if (state.page > 1) {
        state.page -= 1
      } else {
        state.page = 1
      }
    },
    setType: (state , action) => {
     state.type = action.payload
    }
  },
});

export const { startLoadingFilms, setFilms, setPage, setResetPage , setType } = filmsSlice.actions;
export default filmsSlice.reducer;
