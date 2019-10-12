import {createAction} from "redux-actions";
import serverapi from "../../apis/serverapi";
import {FETCH_REVIEWS} from "../action-types";

export const loadReviews = createAction(FETCH_REVIEWS);

export const getRestaurantReviews = (restId) => async dispatch =>{
    const response = await serverapi.get(`/reviews/${restId}`);
    return dispatch(loadReviews(response.data));
};
