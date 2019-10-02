import {handleActions} from 'redux-actions'
import {FETCH_CUISINES, RESET} from '../action-types'

const INITIAL_STATE = {cuisines: {}, loaded: null};

export default handleActions(
    {
        [RESET]: (state, actions) => ({
            ...state, INITIAL_STATE
        }),

        [FETCH_CUISINES]: (state, action) => ({
            ...state,
            cuisines: action.payload.reduce((res, cuisine) => {
                res[cuisine.id] = cuisine.name;
                return res;
            }, {}),
            loaded:true
        })
    },INITIAL_STATE);
