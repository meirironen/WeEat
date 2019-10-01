import {FETCH_CUISINES, RESET} from '../action-types'

const INITIAL_STATE = { cuisines : {} }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET:{
            return {...state, INITIAL_STATE}
        }
        case FETCH_CUISINES: {
            let cuisineObj = action.payload.reduce((res, cuisine) => {
                res[cuisine.id] = cuisine.name;
                return res;
            },{});

            return {...state, cuisines: cuisineObj};
        }
        default:
            return state;
    }
}
