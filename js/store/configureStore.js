import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export  default function configureStore(initialState) {
    const  store = createStoreWithMiddleware(rootReducer,initialState);
    return store;
}