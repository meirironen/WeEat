import { handleActions } from 'redux-actions';
import {FETCH_REVIEWS, RESET} from '../action-types'

const INITIAL_STATE = { reviews : [], loaded: null };

export default handleActions(
    {
        [RESET] : (state) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_REVIEWS]: (state, action) =>{
            return { ...state, reviews: action.payload, loaded:true };
        }
    },
    INITIAL_STATE
);
