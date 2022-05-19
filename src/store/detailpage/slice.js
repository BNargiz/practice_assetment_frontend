import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  space: null,
  loading: true,
};

const detailPageSlice = createSlice({
  name: "detailpage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    spacebyStoryFetched: (state, action) => {
      //   console.log(" action", action);
      state.space = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, spacebyStoryFetched } = detailPageSlice.actions;
export default detailPageSlice.reducer;
