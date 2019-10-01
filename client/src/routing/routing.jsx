import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "../redux/store";
import RestaurantPage from "../pages/Restaurants";
import App from "../components/App";
// import Restaurants from "pages/Restaurants";
// import SingleRestaurant from "pages/SingleRestaurant";
import Header from "../components/Header";

const Routing = () => (
    <Provider {...{ store }}>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                {/*<Route*/}
                {/*    path="/:id"*/}
                {/*    render={({ match }) => {*/}
                {/*        const restaurantId = Number(match.params.id);*/}
                {/*        return <SingleRestaurant {...{ restaurantId }} />;*/}
                {/*    }}*/}
                {/*/>*/}
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Routing;
