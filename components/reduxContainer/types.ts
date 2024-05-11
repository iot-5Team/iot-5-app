export interface RootState{
  categoryReducer: CategoryState;
}

export interface CategoryState{
  category: string
}

export const CATEGORY_CHANGE = "CATEGORY_CHANGE";

interface CategoryChangeAction {
  type: typeof CATEGORY_CHANGE;
  payload: string;
}

// action을 추가하고 싶으면 AppAction = CategoryChangeAction | othersAction; 
// CategoryAction과 관련된 것들 바꿔주기 
export type CategoryAction = CategoryChangeAction;