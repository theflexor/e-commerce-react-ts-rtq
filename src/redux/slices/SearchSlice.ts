import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISortSettings } from "src/vite-env";

interface ISearhSlice {
  settings: ISortSettings;
}

const initialState: ISearhSlice = {
  settings: {},
};

export const SearchSlice = createSlice({
  name: "SearchData",
  initialState,
  reducers: {
    setSearchData(state, action: PayloadAction<ISortSettings>) {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

export const { setSearchData } = SearchSlice.actions;
export default SearchSlice.reducer;
