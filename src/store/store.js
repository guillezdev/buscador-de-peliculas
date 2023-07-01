import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.js";

export default configureStore({
  reducer: {
    films: filmsReducer,
  },
});
