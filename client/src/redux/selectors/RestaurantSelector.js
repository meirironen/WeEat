import { createSelector } from "reselect";
import {FILTER_HANDLERS} from "../../utlis/create-filters";

const filtersSelector = state => state.restaurants.filters;
const restaurantSelector = state => state.restaurants.restaurants;

export const filteredRestaurantSelector = createSelector(
    [restaurantSelector,filtersSelector], (restaurants, filters)=>{
        let filteredList = [...restaurants];
        Object.keys(filters).forEach(filterKey =>{
            filteredList = FILTER_HANDLERS[filterKey](filteredList, filterKey, filters[filterKey]);
        });
        return filteredList;
});


