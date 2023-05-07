import axios from 'axios';
import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MOVIE } from '../redux/actions/actionTypes';
import { addMovieAction } from '../redux/actions/actionCreator';
const AddMovie = () => {
    const moviesState = useSelector((state) => state.movies);
    // console.log(moviesState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({ title: "", overview: "" });
    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
        // console.log(inputData);
    }
    function addMovie(e) {
        e.preventDefault();
        let apiUrl = `http://localhost:3000/results/`
        axios.post(apiUrl, inputData).then((res) => {
            let movies = [...moviesState, inputData]
            dispatch(addMovieAction(movies))
            console.log(res.data);
            setInputData({ title: "", overview: "" })
            // setMovie({...res.data});
            // console.log(movie);
        })
        navigate('/')
    }
    return (
        <>
            <div className="container my-5 border border-primary border-3 p-4 rounded bg-dark">
                <div className="row d-flex justify-content-center ">
                    <form className="form-group" onSubmit={addMovie} >

                        <div className="col-md-12 mt-3 d-flex justify-content-center ">


                            <input className="form-control ms-3 w-50" name="title" value={inputData.name} onChange={onChangeInputs} placeholder="enter Movie title" id="title"></input>
                        </div>
                        <div className="col-md-12 mt-3 d-flex justify-content-center ">


                            <input type={"text"} name="overview" className="form-control ms-3 w-50" value={inputData.name} onChange={onChangeInputs} placeholder="enter Movier overview" id="overview"></input>
                        </div>
                        <div className="col-md-10 pe-5 mt-3  d-flex justify-content-end ">

                            <input type={"submit"} className="me-3 btn btn-info btn-outline-light border border-info border-3" id="submit"></input>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default AddMovie;


/// store


//reducer


//component  --x xx dispatch  --> reducer --> store