import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/films/filmsSlice.js";

export default configureStore({
  reducer: {
    films: filmsReducer,
  },
});
