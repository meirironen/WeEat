/*
import { Component} from "react";
import React from 'react';
import {connect} from "react-redux";
import styles  from 'styles.module.scss'
import {CuisineIconsMapping} from "../../utlis/constants"

class RestaurantListItem extends Component {

	render(){
		const { cuisines } = this.props;
		const restaurant = this.props.data || null;

		if (restaurant){
			return(
				<div className={styles.RestaurantListItem} >
					<div className={styles.Cuisine}>{CuisineIconsMapping[cuisines[restaurant.cuisine_id]]}</div>
					<div className={styles.Details}>
						<div className={styles.Name}>{restaurant.name}</div>
						<div>
							<span>{`Rating: ${restaurant.rating}`}</span>
							{/!*<Stars amount={rating} />*!/}
						</div>
					</div>
				</div>
			);
		}

	}
}

const mapStateToProps = ({cuisines}) => {
	return {
		cuisines :cuisines
	};
}

export default connect(mapStateToProps)(RestaurantListItem);*/
