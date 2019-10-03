import {createAction} from "redux-actions";

import serverapi from "../../apis/serverapi";
import {FETCH_RESTAURANTS, SELECT_RESTAURANT, FETCH_RESTAURANT_BY_ID} from "../action-types";


export const loadRestaurants = createAction(FETCH_RESTAURANTS);
export const loadRestaurant = createAction(FETCH_RESTAURANT_BY_ID);
export const setSelectedRestaurant = createAction(SELECT_RESTAURANT);

export const getRestaurants = () => async dispatch =>{
    const response = await serverapi.get(`/restaurants`);
    return dispatch(loadRestaurants(response.data));
};

export const getRestaurantById = (id) => async dispatch => {
    const response = await serverapi.get(`/restaurants/${id}`);
    return dispatch(loadRestaurant(response.data));
}
