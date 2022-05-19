import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  spaces: [],
  loading: true,
};

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    spaceFullyFetched: (state, action) => {
      //   console.log(" action", action);
      state.spaces = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, spaceFullyFetched } = homePageSlice.actions;
export default homePageSlice.reducer;
