import { combineReducers } from "redux";

// post format:
// {
//   "userId": 1,
//   "id": 4,
//   "title": "eum et est occaecati",
//   "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
// },

// always return new array/object, do not modify existing
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      return [...posts, action.payload];
    case "DELETE_POST":
      return posts.filter((x) => x !== action.payload);
    case "UPDATE_POST":
      return posts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    default:
      return posts;
  }
};

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...users, action.payload];
    default:
      return users;
  }
};

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
