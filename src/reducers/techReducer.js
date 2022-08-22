import {
    GET_TECHS, ADD_TECH, DELETE_TECH, TECH_ERROR, SET_LOADING, UPDATE_TECH
} from '../actions/types';

const initialState = {
    techs: null,
    loading: false,
    error: null
}


const techReducer = (state=initialState, action) => {
  switch (action.type) {

    case SET_LOADING: {
        return {
            ...state,
            loading: true
        }

    }

    case GET_TECHS:
        // console.log(action.payload)
        return {
            ...state,
            techs: action.payload,
            loading: false
        }
  
    default:
        return {
            state
        };
  }
}

export default techReducer