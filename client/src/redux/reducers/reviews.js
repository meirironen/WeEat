import { handleActions } from 'redux-actions';
import {FETCH_REVIEWS, RESET} from '../action-types'

const INITIAL_STATE = { reviews : [], loaded: null };

export default handleActions(
    {
        [RESET] : (state) => {
            return {...state, INITIAL_STATE};
        },

        [FETCH_REVIEWS]: (state, action) =>{
            let tmp = []
            let i = 1000;
            for (let j=0; j<20; j++){
                tmp.push({
                    id: i+j,
                    reviewer : `test rest ${j}`,
                    rating: 2,
                    comment: 'test steert'
                })
            }

            return { ...state, reviews: [...tmp, action.payload], loaded:true };
        }
    },
    INITIAL_STATE
);
