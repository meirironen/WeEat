import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants} from "../../redux/actions/restaurant";
import RestaurantListItem from "../RestaurantListItem";
import styles from './styles.module.scss';

class RestaurantsList extends Component {
	state = {
		loaded : false
	}
	async componentDidMount() {
		await this.props.fetchRestaurants();
		this.setState(({loaded}) => ({loaded:true}))
	}

	render(){
		const {restaurants } = this.props.restaurants;
		if (this.state.loaded){
			return(
				<div className={styles.RestaurantList}>
					{restaurants
					 	? restaurants.map(restaurant => (
							<RestaurantListItem data={restaurant} key={restaurant.id}> </RestaurantListItem>
						 ))
						: "Loading"}
				 </div>
			);
		}

		else{
			return (<div>Loading....</div>)
		}

	}
}

const mapStateToProps = ({restaurants}) => {
	return {
		restaurants :restaurants
	};
}

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsList);

