import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import spaceReducer from "./homepage/slice";
import detailReducer from "./detailpage/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    space: spaceReducer,
    detail: detailReducer,
  },
});
