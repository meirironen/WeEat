import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Message} from "semantic-ui-react";
import {getRestaurants} from "../../redux/actions/restaurant";
import {filteredRestaurantSelector} from "../../redux/selectors/RestaurantSelector";
import RestaurantListItem from "../RestaurantListItem";
import styles from './styles.module.scss';

class RestaurantsList extends Component {
	async componentDidMount() {
		await this.props.getRestaurants();
	}

	render(){
		const {restaurants, loaded } = this.props;
		const {cuisines} = this.props.cuisines;
		if (loaded){
			return(
				<div className={styles.listContainer}>
					{restaurants && restaurants.length > 0
					 	? restaurants.map(restaurant => (
							<RestaurantListItem data={restaurant} cuisines={cuisines} key={restaurant.id}
							restClickHandler={this.props.onRestClick} selectedRestId={this.props.selectedRestId}/>
						 )):  <Message visible>No Restaurants Around...</Message> }
				 </div>
			);
		}
		else{
			return (<div>Loading....</div>)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		restaurants: filteredRestaurantSelector(state),
		cuisines: state.cuisines,
		loaded: state.restaurants.loaded
	};
}

export default connect(mapStateToProps, {getRestaurants})(RestaurantsList);

