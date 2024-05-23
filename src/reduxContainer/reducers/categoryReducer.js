const initial_category = { categoryState: "AI" };

const postCategoryReducer = (state = initial_category, action) => {
  switch (action.type) {
    case "ACTION_CHANGE_CATEGORY":
      return {
        ...state,
        categoryState: action.payload,
      };
    default:
      // 액션 유형이 일치하지 않는 경우, 현재 상태를 반환
      return state;
  }
};

export default postCategoryReducer;
