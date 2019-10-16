import React, {Component} from 'react';
import {connect} from "react-redux";
import {Loader} from "semantic-ui-react";

import ReviewsList from "../../components/ReviewsList";
import {selectRestaurantById} from "../../redux/selectors/RestaurantSelector";
import {CuisineIconsMapping} from "../../utlis/constants";
import {getCuisines} from "../../redux/actions/cuisine";
import {getRestaurantById} from "../../redux/actions/restaurant";
import styles from "./styles.module.scss"


class RestaurantDetails extends Component {

  async componentDidMount() {
      await this.props.getRestaurantById(this.props.restaurantId);
      await this.props.getCuisines();
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
            <div>
              <div className={styles.title}>Delivery time: </div>
              <div> Up to : {deliverytime} minutes</div>
            </div>

            <div>
              <div className={styles.title}>Food card charge: </div>
              <div>{foodcard ? "Yes" : "No"}</div>
            </div>
        </div>
      </div>
    )};

  render(){
    if (this.props.loaded){
      const restaurant = this.props.restaurants[0];
      return (
          <div className={styles.restaurantPageContainer}>
            <div className={styles.restaurantDetailsContainer}>
              {this.renderRestaurantDetails(restaurant)}
            </div>
            <ReviewsList restId={restaurant.id} />
          </div>
      );
    }
    else {
      return (<Loader size="massive" active/>);
    }
  }
}

const mapDispatchToProps = {getCuisines, getRestaurantById};

const mapStateToProps =  (state,props) => {
  return {
    restaurants: selectRestaurantById(state,props),
    cuisines: state.cuisines,
    loaded: state.restaurants.loaded && state.cuisines.loaded
  };};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);
