import {  FETCH_RESTAURANTS, RESET } from '../action-types'

const INITIAL_STATE = { restaurants : [], doneLoading: null, currentRestaurantId: undefined };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET:{
            return {...state, doneLoading: false}
        }

        case FETCH_RESTAURANTS:{
            return {...state, restaurants: action.payload, doneLoading: true};
        }

        default:
            return state;
    }
}
