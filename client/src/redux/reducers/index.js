import { combineReducers } from "redux";

import restaurantReducer from "./restaurant";
import cuisineReducer from "./cuisines"
import reviewReducer from "./reviews"

const rootReducer = combineReducers({
 restaurants: restaurantReducer,
 cuisines: cuisineReducer,
 reviews: reviewReducer
});

export default rootReducer
