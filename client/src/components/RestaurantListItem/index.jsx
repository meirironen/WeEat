import React, { Component } from "react";
import {connect} from "react-redux";
import styles  from './styles.module.scss'
import Stars from '../Stars'
import {CuisineIconsMapping} from "../../utlis/constants"

class RestaurantListItem extends Component {

	render(){
		const { cuisines } = this.props.cuisines;
		const restaurant = this.props.data || null;

		if (restaurant){
			return(
				<div className={styles.itemContainer} >
					<div className={styles.cuisine}>{CuisineIconsMapping[cuisines[restaurant.cuisine_id]]}</div>
					<div className={styles.details}>
						<div className={styles.name}>{restaurant.name} <Stars rating={restaurant.rating}/></div>
						<div className={styles.address}>{restaurant.address}</div>
					</div>
				</div>
			);
		}
		return(<div></div>);
	}
}

const mapStateToProps = ({cuisines}) => {
	return {
		cuisines :cuisines
	};
}

export default connect(mapStateToProps)(RestaurantListItem);
