import React, { Component } from 'react';
import {connect} from 'react-redux';
import RestaurantList from './RestaurantList'

import {fetchCuisines} from "../redux/actions/cuisine";

class App extends Component {
    componentDidMount() {
        this.props.fetchCuisines();
    }

    render(){
        if ( this.props.cuisines.doneLoading ){
            console.log(`loading Restaurant List component`)
            return (<div><RestaurantList> </RestaurantList></div>);
        }
        else {
            return (
                <div>Loading....</div>
            );
        }
    }
}

const mapStateToProps =  ({ cuisines }) => {
    return {cuisines};
};

export default connect(mapStateToProps, {fetchCuisines})(App);
