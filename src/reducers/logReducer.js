import {
    GET_LOGS, SET_LOADING, LOGS_ERROR
} from '../actions/types'

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null

}

const logReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }

        case LOGS_ERROR:
            console.log(action.payload);
            return{
                ...state,
                error: action.payload
            }
        
        case GET_LOGS:
            return{
                ...state,
                logs: action.payload,
                loading: false
            }
            
        default:
            return state;
    }
}

export default logReducer