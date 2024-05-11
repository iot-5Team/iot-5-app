import { CategoryState, CategoryAction, CATEGORY_CHANGE} from "../types";

const initialCategoryState : CategoryState ={
  category: 'AI'
};

export default function categoryReducer(state = initialCategoryState, action:CategoryAction):CategoryState{
  switch(action.type){
    case CATEGORY_CHANGE:
      return {...state, category:action.payload};
    default:
      return state;
  }
}