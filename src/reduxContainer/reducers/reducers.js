import { combineReducers } from "redux";
import postCategoryReducer from "./categoryReducer";
import bookListAll from './bookReducer.js'
const rootReducer = combineReducers({
  postCategoryReducer, bookListAll,
});

export default rootReducer;
