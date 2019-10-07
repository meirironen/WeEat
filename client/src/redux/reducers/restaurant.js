import { handleActions } from 'redux-actions';
import {FETCH_RESTAURANTS, RESET} from '../action-types'

const INITIAL_STATE = { restaurants : [], loaded:null };

export default handleActions(
    {
        [RESET] : (state, action) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_RESTAURANTS]: (state, action) =>{
            return { ...state, restaurants: action.payload, loaded:true };
        }
    }, INITIAL_STATE
)
