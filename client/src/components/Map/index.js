import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import Marker from '../Map/Marker'

import styles from './styles.module.scss'
import {connect} from "react-redux";
import {filteredRestaurantSelector} from "../../redux/selectors/RestaurantSelector";

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
export const CENTER = {
    lat: 32.0727511,
    lng: 34.7952958
};
const ZOOM = 15;

class Gmap extends Component{

    markerDisplay = ({id, name, address, cuisine_id, rating})=>{
        const {cuisines} = this.props.cuisines;
        let cuisine = cuisines[cuisine_id];
        return {
            id, name, address, cuisine, rating
        }
    }

    render() {
        const {restaurants} = this.props;
        return <div className={styles.Map}>
            <GoogleMapReact
                bootstrapURLKeys={{key: REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={CENTER}
                defaultZoom={ZOOM}
                onChildClick={(restId)=> { if (restId !== this.props.selectedRestId) {this.props.onMarkerClick(restId)}}}
            >
                {
                    restaurants.map(
                        (restaurant) =>
                            <Marker key={restaurant.id} lat={restaurant.latitude} lng={restaurant.longitude}
                                    markerData={this.markerDisplay(restaurant)}
                                    show={restaurant.id.toString() === this.props.selectedRestId}/>
                )}
            </GoogleMapReact>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: filteredRestaurantSelector(state),
        cuisines: state.cuisines,
    }
};

export default connect(mapStateToProps)(Gmap);
