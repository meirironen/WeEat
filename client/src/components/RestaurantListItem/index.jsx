import React from "react";
import styles  from './styles.module.scss'
import Stars from '../Stars'
import {CuisineIconsMapping} from "../../utlis/constants"
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {Icon} from "semantic-ui-react";

const RestaurantListItem = (props) => {

	const { cuisines } = props;
	const restaurant = props.data || null;
	const handleRestSelection = () => props.restClickHandler(restaurant.id.toString());


	if (restaurant){
		const selected = props.selectedRestId === restaurant.id.toString() && styles.selected;

		return(
			<div className={classNames([styles.itemContainer, selected]) }>
				<div className={styles.cuisine}>{CuisineIconsMapping[cuisines[restaurant.cuisine_id]]}</div>
				<div className={styles.details}>
					<div className={styles.name} onClick={ handleRestSelection}>{restaurant.name}
						<div>
							<Stars rating={restaurant.rating}/>
						</div>
					</div>
					<div className={styles.address}>{restaurant.address}</div>
					<div className={styles.delivery}>Delivers in : {restaurant.deliverytime} minutes</div>
				</div>
				<div className={styles.actions}>
					<Icon onClick={ handleRestSelection} color="red" link name="map pin"/>
					<NavLink to={`/restaurant/${restaurant.id}`}>
						<Icon link name="comment"/>
					</NavLink>
				</div>
			</div>
		);
	}
	return(<div></div>);
};

export default RestaurantListItem;

