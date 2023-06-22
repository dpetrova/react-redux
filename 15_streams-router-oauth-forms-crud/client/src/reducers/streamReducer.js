import _ from "lodash";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

// array based approach
// const INITIAL_STATE = [];

// object based approach
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // array based approach
      // return [...state, ...action.payload];

      // object based approach
      // create object with provided key from array of object
      // const arr = [{id: 1}, {id: 2}] -> _.mapKeys(arr, "id") -> {1: {id: 1}, 2: {id: 2}}
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      // array based approach
      // return [...state, action.payload];

      // object based approach
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      // array based approach
      // return [...state, action.payload];

      // object based approach
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      // array based approach
      //   return state.map(stream => {
      //     if(stream.id === action.payload.id) {
      //         return action.payload
      //     } else {
      //         return stream
      //     }
      //   })

      // object based approach
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // array based approach
      // return state.filter((stream) => stream.id !== action.payload);

      // object based approach
      // delete property of object (create a new object with removed property)
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
