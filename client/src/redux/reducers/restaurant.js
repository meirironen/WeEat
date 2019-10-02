import { handleActions } from 'redux-actions';
import {  FETCH_RESTAURANTS, RESET } from '../action-types'

const INITIAL_STATE = { restaurants : [], currentRestaurantId: undefined, loaded:null };

export default handleActions(
    {
        [RESET] : (state, actions) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_RESTAURANTS]: (state, action) =>{
            return { ...state, restaurants: action.payload, loaded:true };
        }
    }, INITIAL_STATE
)