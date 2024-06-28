import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { adminReducer } from "./features/adminDashboard/adminDashboard.slice";
import { searchboxReducer } from "./features/searchbox/searchboxSlice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  admin: adminReducer,
  searchBox: searchboxReducer,
});
