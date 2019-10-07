import React from "react";
import styles  from './styles.module.scss'
import Stars from '../Stars'
import {CuisineIconsMapping} from "../../utlis/constants"
import classNames from "classnames";

const RestaurantListItem = (props) => {

	const { cuisines } = props;
	const restaurant = props.data || null;
	const handleRestSelection = () => props.restClickHandler(restaurant.id.toString());

	if (restaurant){
		return(
			<div className={classNames([styles.itemContainer,{[styles.selected]: props.selectedRestId === restaurant.id.toString()}]) }>
				<div className={styles.cuisine}>{CuisineIconsMapping[cuisines[restaurant.cuisine_id]]}</div>
				<div className={styles.details}>
					<div className={styles.name} onClick={ handleRestSelection}>{restaurant.name}
						<Stars rating={restaurant.rating}/></div>
					<div className={styles.address}>{restaurant.address}</div>
					<div className={styles.delivery}>Delivers in : {restaurant.deliverytime} minutes</div>
				</div>
			</div>
		);
	}
	return(<div></div>);
};

export default RestaurantListItem;

