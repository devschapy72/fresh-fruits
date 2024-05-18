import { useEffect, useReducer } from "react";
import reducer from "../reducer/FruitReducer";
import FruitsApi from "../FruitsApi";

const FruitContext = createContext();

const initialstate = {
  isLoading: false,
  fruitAll: [],
  isError: false,
};

const FruitProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getFruit = (api) => {
    dispatch({ type: "FRUIT_LOADING" });
    try {
      const fruitProduct = api;
      dispatch({ type: "ALL_FRUIT", payload: fruitProduct });
    } catch (error) {
      dispatch({ type: "FRUITS_ERROR" });
    }
  };
  useEffect(() => {
    getFruit(FruitsApi);
  });

  return (
    <FruitContext.Provider value={{ ...state }}>
      {children}
    </FruitContext.Provider>
  );
};

// customHooks
const useFruitContext = () => {
  return useContext(FruitContext);
};

export { FruitContext, FruitProvider, useFruitContext };
