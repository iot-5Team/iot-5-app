import { combineReducers } from "redux";
import postCategoryReducer from "./categoryReducer";
import bookListAll from './bookReducer.js'
import setLoginUserData from "./userInfoReducer.js";

const rootReducer = combineReducers({
  postCategoryReducer, bookListAll, setLoginUserData,
});

export default rootReducer;
