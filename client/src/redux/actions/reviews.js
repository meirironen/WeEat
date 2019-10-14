import {createAction} from "redux-actions";
import serverapi from "../../apis/serverapi";
import {FETCH_REVIEWS} from "../action-types";

export const loadReviews = createAction(FETCH_REVIEWS);

export const getRestaurantReviews = (restId) => async dispatch =>{
    const params = {
        restaurant_id: restId
    };
    const response = await serverapi.get(`/reviews`, {params: params});
    return dispatch(loadReviews(response.data));
};
