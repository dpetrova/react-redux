import streamsAPI from "../api/streams";
import browserHistory from "../browserHistory"; //use manually created browser history object
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const fetchStreams = () => {
//   return async (dispatch, getState) => {
//     const response = await streamsAPI.get("/streams");

//     dispatch({
//       type: FETCH_STREAMS,
//       payload: response.data,
//     });
//   };
// };

// short syntax:
export const fetchStreams = () => async (dispatch, getState) => {
  const response = await streamsAPI.get("/streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  // get currently logged user
  const { userId } = getState().auth;
  const response = await streamsAPI.post("/streams", { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });

  // programatically navigate user to home page
  browserHistory.push("/");
};

export const fetchStream = (id) => async (dispatch, getState) => {
  const response = await streamsAPI.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch, getState) => {
  const response = await streamsAPI.patch(`/streams/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });

  browserHistory.push("/");
};

export const deleteStream = (id) => async (dispatch, getState) => {
  await streamsAPI.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });

  browserHistory.push("/");
};
