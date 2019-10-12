import { handleActions } from 'redux-actions';
import {APPLY_REST_FILTER, FETCH_RESTAURANTS, RESET, FETCH_RESTAURANT_BY_ID} from '../action-types'

const INITIAL_STATE = { restaurants : [], filters: {}, loaded: null };

export default handleActions(
    {
        [RESET] : (state, action) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_RESTAURANTS]: (state, action) =>{

            let tmp = []
            let i = 1000;
            for (let j=0; j<20; j++){
                tmp.push({
                    id: i+j,
                    name : `test rest ${j}`,
                    cuisine_id: 2,
                    address: 'test steert',
                    latitude: 32 +j ,
                    longitude: 34 + j,
                    deliverytime: 90,
                    rating : 3

                })
            }
            return { ...state, restaurants: [...tmp,...action.payload], loaded:true };
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
        },

        [FETCH_RESTAURANT_BY_ID]: (state,action) =>{
            return {...state, restaurants: [action.payload], filters : {}, loaded:true}
        }
    },
    INITIAL_STATE
);
