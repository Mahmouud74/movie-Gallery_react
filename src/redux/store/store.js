import * as redux from "redux";
import thunk from "redux-thunk";
import { middleWare } from "../middlewares/loggerMiddleware";
import { MovieReducer } from "../reducers/moviesReducer";

const store = redux.createStore(MovieReducer,redux.applyMiddleware(middleWare,thunk));

export default store