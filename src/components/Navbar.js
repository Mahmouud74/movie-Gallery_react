import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../contexts/Movies.context';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand text-light" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link to={'/'} className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
        <Link to={'/'} className="nav-link" href="#">About</Link >
      </li>
      <li className="nav-item">
        <Link to={'/add'} className="nav-link" href="#">Add</Link >
      </li>

      
    </ul>
   
  </div>
</nav>
      {/* <div className='bg-light text-danger'> {state.movies[0].title} </div> */}
        </>
    );
};

export default Navbar;