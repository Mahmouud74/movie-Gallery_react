import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MovieDetail = () => {
    // const [movie,setMovie] = useState();
    const moviesState = useSelector((state) => state.movies);
    let userId = useParams();
    console.log(userId['id']);
    // useEffect(()=>{
    //     let apiUrl=`http://localhost:3000/results/${userId['id']}`
    //     axios.get(apiUrl).then((res)=>{
    //         console.log(res.data);
    //         setMovie({...res.data});
    //         console.log(movie);
    //     })
    // },[movie,userId['id']])
    // function add(){
    //     console.log(movie);
    // }
    // console.log(movie);
    let movie = moviesState.find((e) => e.id === +userId['id']);
    return (
        <>
            {movie && <div className="row d-flex justify-content-center">


                <div className="col-md-6 my-3">

                    <div className="card" style={{ maxWidth: "" }}>
                        <img className="card-img-top" src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-primary text-decoration-outline">{movie?.title}</h5>
                            <p className="card-text">{movie?.overview}</p>
                            <div className="d-flex justify-content-end">
                            </div>
                        </div>
                    </div>
                </div>

            </div>}
        </>

    );
};


export default MovieDetail;