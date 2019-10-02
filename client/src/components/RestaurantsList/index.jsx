import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRestaurants} from "../../redux/actions/restaurant";
import RestaurantListItem from "../RestaurantListItem";
import styles from './styles.module.scss';

class RestaurantsList extends Component {
	async componentDidMount() {
		await this.props.getRestaurants();
	}

	render(){
		const {restaurants } = this.props;
		const {cuisines} = this.props.cuisines;

		if (restaurants.loaded){
			return(
				<div className={styles.listContainer}>
					{restaurants.restaurants
					 	? restaurants.restaurants.map(restaurant => (
							<RestaurantListItem data={restaurant} cuisines={cuisines} key={restaurant.id}> </RestaurantListItem>
						 )): "Loading"}
				 </div>
			);
		}
		else{
			return (<div>Loading....</div>)
		}
	}
}

const mapStateToProps = ({restaurants, cuisines}) => {
	return {
		restaurants :restaurants,
		cuisines: cuisines
	};
}

export default connect(mapStateToProps, {getRestaurants})(RestaurantsList);

