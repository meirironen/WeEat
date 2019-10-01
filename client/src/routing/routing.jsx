import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../pages/Restaurants/Restaurants";
import Header from "../components/Header";

import store from "../redux/store";

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