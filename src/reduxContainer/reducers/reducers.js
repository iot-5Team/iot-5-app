import { combineReducers } from "redux";
import postCategoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
  postCategoryReducer,
});

export default rootReducer;
