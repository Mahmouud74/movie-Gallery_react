import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIES } from "../actions/actionTypes";


const initialState={movies:[]};
export  const MovieReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_MOVIES:
            console.log(payload);
            return {movies:[...payload]};
        case DELETE_MOVIE:
            return{movies:[...payload]}
        case ADD_MOVIE:
            return{movies:[...payload]} //newState
        default:
            return {...state}
    }
}