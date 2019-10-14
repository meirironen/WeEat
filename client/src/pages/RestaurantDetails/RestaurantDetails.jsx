import React, {Component} from 'react';
import {connect} from "react-redux";
import {Loader} from "semantic-ui-react";

import ReviewsList from "../../components/ReviewsList";
import {filteredRestaurantSelector} from "../../redux/selectors/RestaurantSelector";
import {CuisineIconsMapping} from "../../utlis/constants";
import {getCuisines} from "../../redux/actions/cuisine";
import {getRestaurantById} from "../../redux/actions/restaurant";
import styles from "./styles.module.scss"


class RestaurantDetails extends Component {

  async componentDidMount() {
    await this.props.getCuisines();
    if ( this.props.restaurantId){
      await this.props.getRestaurantById(this.props.restaurantId);
    }
  }

  renderRestaurantDetails = (restaurant) =>{
    const {cuisine_id, name, address, foodcard, deliverytime} = restaurant;
    const {cuisines} = this.props.cuisines;

    return(
      <div className={styles.restaurantDetailsPane}>
        <div className={styles.detailsCol}>
          <div className={styles.cuisineIcon}>{CuisineIconsMapping[cuisines[cuisine_id]]}</div>
          <div className={styles.cuisineName}>{cuisines[cuisine_id]}</div>
        </div>

        <div className={styles.detailsCol}>
          <div className={styles.name}>{name}</div>
          <div className={styles.address}>{address}</div>
        </div>

        <div className={styles.detailsCol}>
            <div className={styles.deliveryTime}>
              <div className={styles.title}>Delivery time: </div>
              <div> Up to : {deliverytime} minutes</div>
            </div>

            <div className={styles.foodcard}>
              <div className={styles.title}>Food card charge: </div>
              <div>{foodcard ? "Yes" : "No"}</div>
            </div>
        </div>
      </div>
    );
  };

  render(){
    if (this.props.loaded){
      const restaurant = this.props.restaurants[0];
      return (
          <div className={styles.restaurantPageContainer}>
            <div className={styles.restaurantDetailsContainer}>
              {this.renderRestaurantDetails(restaurant)}
            </div>
            <ReviewsList restId={this.props.restaurantId} />
          </div>
      );
    }
    else {
      return (<Loader size="massive" active/>);
    }
  }
}

const mapStateToProps =  (state) => {
  return {
    restaurants: filteredRestaurantSelector(state),
    cuisines: state.cuisines,
    loaded: state.restaurants.loaded && state.cuisines.loaded
  };};

export default connect(mapStateToProps, {getCuisines, getRestaurantById})(RestaurantDetails);
