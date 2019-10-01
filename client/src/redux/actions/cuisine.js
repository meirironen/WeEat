import serverapi from "../../apis/serverapi";
import {FETCH_CUISINES} from "../action-types";

export const fetchCuisines = () => {
    return async dispatch => {
        const response = await serverapi.get(`/cuisines`);
        console.log( `dispatch fetch cuisine`)
        dispatch( {
            type: FETCH_CUISINES,
            payload: response.data
        })
    }
}
