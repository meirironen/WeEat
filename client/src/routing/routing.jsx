import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Restaurants from "../pages/Restaurants/Restaurants";
import Header from "../components/Header";


const Routing = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Restaurants} />
            {/*<Route*/}
            {/*    path="/:id"*/}
            {/*    render={({ match }) => {*/}
            {/*        const restaurantId = Number(match.params.id);*/}
            {/*        return <SingleRestaurant {...{ restaurantId }} />;*/}
            {/*    }}*/}
            {/*/>*/}
        </Switch>
    </BrowserRouter>
);

export default Routing;
