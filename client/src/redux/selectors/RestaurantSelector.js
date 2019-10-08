import { createSelector } from "reselect";

const filtersSelector = state => state.restaurants.filters;
const restaurantSelector = state => state.restaurants.restaurants;


function filterRestaurants(restaurants = [], filter = null){
    console.log(filter);
}


export const filteredRestaurantSelector = createSelector(
    [restaurantSelector,filtersSelector], (restaurants, filters)=>{

        if ( filters.length > 0 ){
            debugger;
            filters.map((filterKey, filterValue)=> {
                filterRestaurants(restaurants, {filterKey,filterValue});
            });
        }

        return restaurants;
});


