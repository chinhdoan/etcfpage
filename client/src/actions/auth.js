import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    router('/read');
    
  } catch (error) { 
    console.log(error);
    
    router('/');
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    router('/read');
  
  } catch (error) {
   
    console.log(error);
    router('/');
  }
};
