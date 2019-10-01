import { combineReducers } from "redux";

import restaurantReducer from "./restaurant";
import cuisineReducer from "./cuisines"

 const rootReducer = combineReducers({
     restaurants: restaurantReducer,
     cuisines: cuisineReducer
 });

 export default rootReducer