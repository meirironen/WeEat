import { handleActions } from 'redux-actions';
import {FETCH_RESTAURANTS, RESET, SELECT_RESTAURANT} from '../action-types'

const INITIAL_STATE = { restaurants : [], currentRestaurantId: undefined, loaded:null };

export default handleActions(
    {
        [RESET] : (state, action) => {
            return {...state, INITIAL_STATE};
        },

        [SELECT_RESTAURANT]: (state, action) =>{
            return {...state, currentRestaurantId: action.payload}
        },

        [FETCH_RESTAURANTS]: (state, action) =>{
            return { ...state, restaurants: action.payload, loaded:true };
        }
    }, INITIAL_STATE
)
