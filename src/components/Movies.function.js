import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../contexts/Movies.context';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_MOVIE, GET_MOVIES } from '../redux/actions/actionTypes';
import { deleteMovieAction, getMovies, getMoviesAction, getUsers } from '../redux/actions/actionCreator';

const MoviesFun = () => {
    // const {state,setState,deleteMovie}=useContext(MoviesContext);
    // const[state,setState]=useState({movies:[]});
    // const [id,setId]=useState(0);
    // useEffect(()=>{
    //     let apiUrl='http://localhost:3000/results'
    //     axios.get(apiUrl).then((res)=>{
    //         console.log(res.data);
    //         setState({movies:res.data});
    //         console.log(state.movies);
    //     })
    // },[])
    const moviesState = useSelector((state)=>state.movies);
    // console.log(moviesState);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getMoviesAction())
    }, [dispatch])

    
    function deleteMovie(e) {
        let apiUrl = `http://localhost:3000/results/${e.target.id}`
        axios.delete(apiUrl).then((res) => {
            console.log(e.target.id);
            let i = 0
            moviesState.find((element, idx) => {
                i = idx;
                return +element.id === +e.target.id;
            })
            moviesState.splice(i, 1);
            //dispatch({type:,payload:})
            dispatch(deleteMovieAction(moviesState))

        })

    }
    return <>

        <div className="d-flex justify-content-center">
            <p className=" h3 text-decoration-underline text-primary">
                Movies
            </p>
        </div>
        {moviesState.length && <div className="row">
            {moviesState.map((movie, idx) => {
                // console.log(movie.title);
                return <div key={idx} className="col-md-4 my-3">

                    <div className="card" style={{ maxWidth: "" }}>
                        <img className="card-img-top" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-primary text-decoration-outline">{movie.title}</h5>
                            <p className="card-text">{movie.overview}</p>

                            <div className='d-flex justify-content-center mb-3 '>
                                <button className='btn btn-danger btn-outline-dark' id={`${movie.id}`} onClick={deleteMovie}>DELETE</button>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to={`/${movie.id}`} className="btn btn-primary btn-outline-dark w-100 ">Show More</Link>
                            </div>
                        </div>
                    </div>
                </div>

            })}


        </div>}
        {moviesState.length || <div className='d-flex justify-content-center'>
            <p className='alert alert-success my-3'>
                loading ..

            </p>
        </div>}



    </>;
};

export default MoviesFun;