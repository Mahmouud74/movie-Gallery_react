import { type } from "@testing-library/user-event/dist/type";
import { fetchData, fetchMovies } from "../../api/movies.api";
import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIES } from "./actionTypes";

export const getMoviesAction = () => (dispatch) => {
    fetchMovies().then((res) => {
        return dispatch({ type: GET_MOVIES, payload: res.data })
    })
};
export const deleteMovieAction=(data)=>{return {type:DELETE_MOVIE,payload:data}};
export const addMovieAction=(data)=>{ return {type:ADD_MOVIE,payload:data}};
