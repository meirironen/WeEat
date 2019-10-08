import { handleActions } from 'redux-actions';
import {APPLY_REST_FILTER, FETCH_RESTAURANTS, RESET} from '../action-types'

const INITIAL_STATE = { restaurants : [], filters: [], loaded: null };

export default handleActions(
    {
        [RESET] : (state, action) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_RESTAURANTS]: (state, action) =>{
            return { ...state, restaurants: action.payload, loaded:true };
        },

        [APPLY_REST_FILTER]: (state, action) =>{
            debugger;
            console.log(action);
        }
    }, INITIAL_STATE
)
