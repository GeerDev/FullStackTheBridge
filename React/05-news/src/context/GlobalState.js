import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import AppReducer from "./AppReducer";

const initialState = {
  news: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    const getNews = async () => {
      const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=VLslSANKe2fXbThErESGpBMb6TUUV1fi");

      dispatch({
        type: "GET_NEWS",
        payload: res.data.results,
      });

    };
  
    return (
      <GlobalContext.Provider
        value={{
          news: state.news,
          getNews,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };