import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import Marker from '../Map/Marker'

import styles from './styles.module.scss'
import {connect} from "react-redux";
import {getCuisines} from "../../redux/actions/cuisine";

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
export const CENTER = {
    lat: 32.0727511,
    lng: 34.7952958
};
const ZOOM = 15;

class Gmap extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedItem : null
        }
    }
    render() {
        const {restaurants} = this.props.restaurants;

        return <div className={styles.Map}>
            <GoogleMapReact
                bootstrapURLKeys={{key: REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={CENTER}
                defaultZoom={ZOOM}
                onChildClick={(restId) => this.setState({selectedItem : restId}) }
            >

                {

                    restaurants.map(
                        ({id, name, latitude, longitude}) =>
                            <Marker key={id} name={name} lat={latitude}
                                    lng={longitude} show={id.toString() === this.state.selectedItem}/>
                    )
                }
            </GoogleMapReact>
        </div>;
    }
}

const mapStateToProps =  ({ cuisines, restaurants }) => {
    return {cuisines, restaurants};
};

export default connect(mapStateToProps)(Gmap);
