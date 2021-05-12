import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  myRecipes: localStorage.getItem("myRecipes")
    ? JSON.parse(localStorage.getItem("myRecipes"))
    : [],
  cooked: localStorage.getItem("cooked")
    ? JSON.parse(localStorage.getItem("cooked"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("myRecipes", JSON.stringify(state.myRecipes));
    localStorage.setItem("cooked", JSON.stringify(state.cooked));
  }, [state]);

  // actions
  const addRecipeToMyRecipes = (hits) => {
    dispatch({ type: "ADD_RECIPE_TO_MYRECIPES", payload: hits });
  };

  const removeRecipeFromMyRecipes = (id) => {
    dispatch({ type: "REMOVE_RECIPE_FROM_MYRECIPES", payload: id });
  };

  const addRecipeToCooked = (hits) => {
    dispatch({ type: "ADD_RECIPE_TO_COOKED", payload: hits });
  };

  const moveToMyRecipes = (hits) => {
    dispatch({ type: "MOVE_TO_MYRECIPES", payload: hits });
  };

  const removeFromCooked = (id) => {
    dispatch({ type: "REMOVE_FROM_COOKED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        myRecipes: state.myRecipes,
        cooked: state.cooked,
        addRecipeToMyRecipes,
        removeRecipeFromMyRecipes,
        addRecipeToCooked,
        moveToMyRecipes,
        removeFromCooked,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
