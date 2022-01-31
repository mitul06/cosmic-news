import { FETCH_API, FETCH_API_FAILER, FETCH_API_SUCSESS } from "../actions/types";

const initialState = {
    success: false,
    error: false,
    data: null
}

export const newsApiReducers = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_API:
            return {
                ...state,
                success: false,
                error: false,
                data:null
            }
        
        case FETCH_API_SUCSESS: 
            return {
                ...state,
                success:true,
                error: false,
                data: action.payload
            }

        case FETCH_API_FAILER:
            return {
                ...state,
                success:false,
                error: true,
                data: null
            }
    
        default:
            return state;
    }
}