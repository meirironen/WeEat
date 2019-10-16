import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Restaurants from "../pages/Restaurants/Restaurants";
import Header from "../components/Header";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";

const Routing = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Restaurants} />
            <Route
                path="/restaurant/:id"
                render={({ match }) => {
                    const restaurantId = Number(match.params.id);
                    return <RestaurantDetails {...{ restaurantId }} />;
                }}
            />
        </Switch>
    </BrowserRouter>
);

export default Routing;
