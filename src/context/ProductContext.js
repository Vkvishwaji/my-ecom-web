import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer';
import axios from "axios";
const AppContaxt = createContext();

const API = "https://api.pujakaitem.com/api/products";
inicialState={
  isLoading:false,
  isError:false,
  products:[],
  featureProducts:[]
}; 

const AppProvider = ({ children }) => {
  const[state, dispatch] = useReducer(reducer,inicialState)

  const getProducts = async (url) => {

    dispatch({ type:"API_LOADING" })
    try{
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type:"SET_API_DATA", payload:"products" })
    }catch (error){
      dispatch({ type:"API_ERROR" })
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContaxt.Provider value={{ ...state }}>
      {children}
    </AppContaxt.Provider>
  );
};

// costom Hook

const useProductContext = () => {
  return useContext(AppContaxt);
};

export { AppProvider, AppContaxt, useProductContext };
