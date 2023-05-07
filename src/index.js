import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, Navigate, Route, RouterProvider } from 'react-router-dom';
import MoviesFun from './components/Movies.function';
import Error from './components/Error';
import MovieDetail from './components/MovieDetail';
import AddMovie from './components/AddMovie';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      {path:"/",element:  <Navigate to="/movies" /> },
      { path: '/movies', element: <MoviesFun></MoviesFun> },
      { path: ':id', element: <MovieDetail></MovieDetail> },
      { path: '/add', element: <AddMovie></AddMovie> },
    ]
  },
  { path: '*', element: <Error></Error> }
])
// console.log(store.getState());
root.render(
    <div className='bg-dark m-0'>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
