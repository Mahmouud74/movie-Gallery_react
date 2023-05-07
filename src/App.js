import { Outlet } from 'react-router-dom';
import './App.css';
import Images from './components/images';
import Movies from './components/Movies.Class'; 
import MoviesFun from './components/Movies.function';
import Navbar from './components/Navbar';
import { MoviesContext } from './contexts/Movies.context';
import MovieModule from './modules/movieModule';
function App() {
  return (<>
    
      <Navbar></Navbar>
    
      <div className="container pt-4">
        {/* <Movies></Movies> */}
         <MovieModule></MovieModule>

    </div>
    <div className='container '>
    </div>
    </>
  );
}

export default App;
