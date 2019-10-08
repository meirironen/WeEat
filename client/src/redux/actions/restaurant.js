import {createAction} from "redux-actions";

import serverapi from "../../apis/serverapi";
import {FETCH_RESTAURANTS, FETCH_RESTAURANT_BY_ID, APPLY_REST_FILTER} from "../action-types";

export const loadRestaurants = createAction(FETCH_RESTAURANTS);
export const applyRestaurantFilter = createAction(APPLY_REST_FILTER);
export const loadRestaurant = createAction(FETCH_RESTAURANT_BY_ID);

export const getRestaurants = () => async dispatch =>{
    const response = await serverapi.get(`/restaurants`);
    return dispatch(loadRestaurants(response.data));
};

export const getRestaurantById = (id) => async dispatch => {
    const response = await serverapi.get(`/restaurants/${id}`);
    return dispatch(loadRestaurant(response.data));
}
