import axios from "axios";
import { startLoading, spacebyStoryFetched } from "./slice";
import { apiUrl } from "../../config/constants";

export const fetchSpacesbystory = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log("response", response.data);

    const spaceWithStory = response.data;
    // console.log("response", spaces);
    dispatch(spacebyStoryFetched(spaceWithStory));
  } catch (e) {
    console.log(e.message);
  }
};
