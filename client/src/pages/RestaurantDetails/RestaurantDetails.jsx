import React, {Component} from 'react';
import styles from "./styles.module.scss"
import {connect} from "react-redux";

import {getCuisines} from "../../redux/actions/cuisine";
import {getRestaurantById} from "../../redux/actions/restaurant";
import {Loader} from "semantic-ui-react";
import {filteredRestaurantSelector} from "../../redux/selectors/RestaurantSelector";
import cuisines from "../../redux/reducers/cuisines";
import {CuisineIconsMapping} from "../../utlis/constants";
import ReviewsList from "../../components/ReviewsList";


class RestaurantDetails extends Component {

  async componentDidMount() {
    await this.props.getCuisines();
    if ( this.props.restaurantId){
      await this.props.getRestaurantById(this.props.restaurantId);
    }
  }

  showRestaurantDetails = (restaurant) =>{
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
              <div className={styles.title}>Foodcard charge: </div>
              <div>{foodcard.toString()}</div>
            </div>
        </div>
      </div>
    );
  }

  render(){
    if (this.props.loaded){
      const restaurant = this.props.restaurants[0];
      return (
          <div className={styles.restaurantPageContainer}>
            <div className={styles.restaurantDetailsContainer}>
              {this.showRestaurantDetails(restaurant)}
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
