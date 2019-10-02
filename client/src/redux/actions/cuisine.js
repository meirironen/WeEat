import {createAction} from 'redux-actions';
import serverapi from "../../apis/serverapi";
import {FETCH_CUISINES} from "../action-types";

export const loadCuisines = createAction(FETCH_CUISINES);

export const getCuisines = () => async dispatch =>{
    const response = await serverapi.get(`/cuisines`);
    return dispatch(loadCuisines(response.data));
}