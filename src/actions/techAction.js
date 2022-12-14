import {
    GET_TECHS, ADD_TECH, DELETE_TECH, TECH_ERROR, SET_LOADING
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
  

  //Add Techs
  export const addTechs = tech => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        } 
    }
    try {
        setLoading();

        const res = await axios.post('/techs', tech, config);

        dispatch({
            type: ADD_TECH,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: TECH_ERROR,
            payload: error.response.statusText
        })
        
    }
  }
 
  //Delete Techs
  export const deleteTech = (id) => async dispatch => {
    try {
        await axios.delete(`/techs/${id}`);

        dispatch({
            type: DELETE_TECH,
            payload: id
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
  