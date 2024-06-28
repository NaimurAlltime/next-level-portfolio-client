import { createSlice } from "@reduxjs/toolkit";

type SearchBoxState = {
  dropOff: boolean;
  openRangePickerOpen: boolean;
  openRangePickerRes: boolean;
};

const initialState: SearchBoxState = {
  dropOff: false,
  openRangePickerOpen: false,
  openRangePickerRes: false,
};

const searchboxSlice = createSlice({
  name: "searchbox",
  initialState,
  reducers: {
    setDropOff(state, { payload }) {
      state.dropOff = payload;
    },
    setOpenRangePickerOpen(state, { payload }) {
      state.openRangePickerOpen = payload;
    },
    setOpenRangePickerResOpen(state, { payload }) {
      state.openRangePickerRes = payload;
    },
  },
});

export const searchboxReducer = searchboxSlice.reducer;

export const { setDropOff, setOpenRangePickerOpen, setOpenRangePickerResOpen } = searchboxSlice.actions;
