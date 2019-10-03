import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Loader } from 'semantic-ui-react';

import RestaurantsList from '../../components/RestaurantsList'
import {getCuisines} from "../../redux/actions/cuisine";
import Gmap from "../../components/Map";


class Restaurants extends Component {
    async componentDidMount() {
        await this.props.getCuisines();
    }
    render(){
        if (this.props.cuisines.loaded){
            return (
                <div>
                    <RestaurantsList/>
                    <Gmap/>
                </div>);
        }
        else {
            return (<Loader size="massive" active/>);
        }
    }
}

const mapStateToProps =  ({ cuisines }) => {
    return {cuisines};
};

export default connect(mapStateToProps, {getCuisines})(Restaurants);