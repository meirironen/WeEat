import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Loader } from 'semantic-ui-react';

import RestaurantsList from '../../components/RestaurantsList'

import {fetchCuisines} from "../../redux/actions/cuisine";


class Restaurants extends Component {
    state = {
        loaded : false
    }
    async componentDidMount() {
        await this.props.fetchCuisines();
        this.setState(state => ({loaded:true}))
    }

    render(){
        if (this.state.loaded){
            return (<div><RestaurantsList> </RestaurantsList></div>);
        }
        else {
            return (<Loader size="massive" active/>);
        }
    }
}

const mapStateToProps =  ({ cuisines }) => {
    return {cuisines};
};

export default connect(mapStateToProps, {fetchCuisines})(Restaurants);