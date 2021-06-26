import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {imagesReducer} from "./images.reducer";
import {categoriesReducer} from "./categories.reducer";

const rootReducer = combineReducers( {
    catImages: imagesReducer,
    catCategories: categoriesReducer,
});


// type RootReducerType = typeof rootReducer
// export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store

export default store