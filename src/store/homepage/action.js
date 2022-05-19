import axios from "axios";
import { startLoading, spaceFullyFetched } from "./slice";
import { apiUrl } from "../../config/constants";

export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/`);
    // console.log("response", response);

    const spaces = response.data;
    // console.log("response", spaces);
    dispatch(spaceFullyFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
};
