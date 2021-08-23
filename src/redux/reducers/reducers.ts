import { combineReducers } from "redux";
import categoriesReducer from "./categories-reducer";
import categoryReducer from "./category-reducer";
import contentReducer from "./content-reducer";
import screenTypeReducer from "./screen-type-reducer";
import contentTypeReducer from "./content-type-reducer";

export const reducers = combineReducers({
    categories: categoriesReducer, 
    screenType: screenTypeReducer,
    category: categoryReducer,
    content: contentReducer,
    contentType: contentTypeReducer
});

export type RootState = ReturnType<typeof reducers>