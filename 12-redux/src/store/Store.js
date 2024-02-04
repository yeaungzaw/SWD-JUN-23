import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer/counterReducer";

const combine = combineReducers({
  counter: counterReducer,
});

export const store = createStore(combine);
