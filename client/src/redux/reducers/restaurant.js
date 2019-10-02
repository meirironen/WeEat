import {  FETCH_RESTAURANTS, RESET } from '../action-types'

const INITIAL_STATE = { restaurants : [], currentRestaurantId: undefined };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET:{
            return {...state, INITIAL_STATE}
        }

        case FETCH_RESTAURANTS:{
            return { ...state, restaurants: action.payload };
        }

        default:
            return state;
    }
}
