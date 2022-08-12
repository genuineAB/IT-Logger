import {
    GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS, DELETE_LOGS
} from './types';
import axios from 'axios';


//Get Logs
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get('/logs');

    dispatch({
        type: GET_LOGS,
        payload: res.data
    })


  } catch (error) {
    dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
    })
  }
}

//Add Logs
export const addLogs = (logs) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
      setLoading();
  
      const res = await axios.post('/logs', logs, config);
  
      dispatch({
          type: ADD_LOGS,
          payload: res.data
      })
  
  
    } catch (error) {
      dispatch({
          type: LOGS_ERROR,
          payload: error.response.data
      })
    }
  }
  
  //Delete Logs
  export const deleteLogs = id => async (dispatch) => {
    setLoading();
    try {
        await axios.delete(`/logs/${id}`);
        dispatch({
            type: DELETE_LOGS,
            payload: id
        })

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
  }

//Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export default getLogs;
