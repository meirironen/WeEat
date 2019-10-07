import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Loader } from 'semantic-ui-react';

import RestaurantsList from '../../components/RestaurantsList'
import {getCuisines} from "../../redux/actions/cuisine";
import Gmap from "../../components/Map";


class Restaurants extends Component {
    state = {
        selectedRestId: undefined
    };

    async componentDidMount() {
        await this.props.getCuisines();
    }

    handleRestChange = (id) => {
        this.setState({
            selectedRestId: id
        });
    };

    render(){
        if (this.props.cuisines.loaded){
            return (
                <div>
                    <RestaurantsList onRestClick={this.handleRestChange} selectedRestId={this.state.selectedRestId}/>
                    <Gmap onMarkerClick={this.handleRestChange} selectedRestId={this.state.selectedRestId}/>
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
