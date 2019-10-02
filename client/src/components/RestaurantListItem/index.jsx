import React from "react";
import styles  from './styles.module.scss'
import Stars from '../Stars'
import {CuisineIconsMapping} from "../../utlis/constants"

const RestaurantListItem = (props) => {
	const { cuisines } = props;
	const restaurant = props.data || null;

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
};

export default RestaurantListItem;

