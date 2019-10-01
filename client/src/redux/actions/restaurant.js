import serverapi from "../../apis/serverapi";
import {FETCH_RESTAURANTS, FETCH_RESTAURANT_BY_ID} from "../action-types";

export const fetchRestaurants = () => {
    return async dispatch => {
        const response = await serverapi.get(`/restaurants`);
        dispatch( {
            type: FETCH_RESTAURANTS,
            payload: response.data
        })
    }
}

export const fetchRestaurantById = (id) => {
    return async dispatch => {
        const response = await serverapi.get(`/restaurants/${id}`)

        dispatch({
            type : FETCH_RESTAURANT_BY_ID,
            payload: response.data
        })
    }
}
