import jsonplaceholder from "../api/jsonplaceholder";
import _ from "lodash";

// !!!! Bad approach !!!! -> Use custom middleware for async actions
// export const fetchPosts = async () => {
//   const response = await jsonplaceholder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

// function that return a function
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonplaceholder.get("/posts");

    // manually dispatch action
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const deletePost = (post) => {
  return {
    type: "DELETE_POST",
    payload: post,
  };
};

export const updatePost = (post) => {
  return {
    type: "UPDATE_POST",
    payload: post,
  };
};

// original version without memoization
// export const fetchUser = (id) => {
//   return async (dispatch, getState) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({
//       type: "FETCH_USER",
//       payload: response.data,
//     });
//   };
// };

export const fetchUser = (id) => {
  return (dispatch, getState) => {
    // call memoized function
    _fetchUser(id, dispatch);
  };
};

// shorten syntax
//export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// use memoized function to not fetch users that already fetched before
// memoized function -> a function that memoizes the result of func
// by default, the first argument provided to the memoized function is used as the map cache key
export const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});

// optional: another approach is to combine action creators into another action creator
export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // getState() gives access to all data inside redux
    //const uniqueUserIds = _.uniq(_.map(getState().posts, "userId"));
    //uniqueUserIds.forEach((id) => dispatch(fetchUser(id)));

    //using chaining (the first argument in every chaining method is the result of previous)
    _.chain(getState().posts)
      ._map("userId")
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
  };
};
