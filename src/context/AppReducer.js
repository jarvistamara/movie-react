export default (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE_TO_MYRECIPES":
      return {
        ...state,
        myRecipes: [action.payload, ...state.myRecipes],
      };
    case "REMOVE_RECIPE_FROM_MYRECIPES":
      return {
        ...state,
        myRecipes: state.myRecipes.filter(
          (hits) => hits.id !== action.payload
        ),
      };
    case "ADD_RECIPE_TO_COOKED":
      return {
        ...state,
        myRecipes: state.myRecipes.filter(
          (hits) => hits.id !== action.payload.id
        ),
        cooked: [action.payload, ...state.cooked],
      };
    case "MOVE_TO_MYRECIPES":
      return {
        ...state,
        cooked: state.cooked.filter(
          (hits) => hits.id !== action.payload.id
        ),
        cooked: [action.payload, ...state.cooked],
      };
    case "REMOVE_FROM_COOKED":
      return {
        ...state,
        cooked: state.cooked.filter((hits) => hits.id !== action.payload),
      };
    default:
      return state;
  }
};
