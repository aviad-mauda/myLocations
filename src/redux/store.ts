import { createStore , applyMiddleware} from "redux";
import { reducers } from "./reducers/reducers";
import thunk from "redux-thunk";

var categories;

if(window.localStorage.getItem('categories') == null) {
    categories = [];
} else {
    categories = JSON.parse(window.localStorage.getItem('categories') as string);
}

const initialState = { 
    categories: categories
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
)

export default store;