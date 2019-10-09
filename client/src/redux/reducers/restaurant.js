import { handleActions } from 'redux-actions';
import {APPLY_REST_FILTER, FETCH_RESTAURANTS, RESET} from '../action-types'

const INITIAL_STATE = { restaurants : [], filters: {}, loaded: null };

export default handleActions(
    {
        [RESET] : (state, action) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_RESTAURANTS]: (state, action) =>{
            return { ...state, restaurants: action.payload, loaded:true };
        },

        [APPLY_REST_FILTER]: (state, action) =>{
            if ( !action.payload.value) {
                const updatedFilters = {...state.filters}
                delete updatedFilters[action.payload.filterKey];
                return { ...state, filters: updatedFilters };
            }

            return { ...state,
                filters: {...state.filters, [action.payload.filterKey] : action.payload.value}
            };
        }
    },
    INITIAL_STATE
);
