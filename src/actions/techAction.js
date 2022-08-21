import {
    GET_TECHS, ADD_TECH, DELETE_TECH, TECH_ERROR, SET_LOADING, UPDATE_TECH
} from './types';
import axios from 'axios';


//Get Techs
export const getTechs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await axios.get('/techs');
  
      dispatch({
          type: GET_TECHS,
          payload: res.data
      })
  
  
    } catch (error) {
      dispatch({
          type: TECH_ERROR,
          payload: error.response.statusText
      })
    }
  }
  
 

  //Set Loading to True
  export const setLoading = () => {
      return {
          type: SET_LOADING
      }
  }
  
  export default getTechs;
  