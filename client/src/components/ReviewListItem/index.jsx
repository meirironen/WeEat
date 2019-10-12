import React from "react";
import styles  from './styles.module.scss'
import Stars from '../Stars'
import {List, Image} from 'semantic-ui-react';

const ReviewListItem = (props) => {

	const { reviewData } = props;
	console.log(reviewData)
	if (reviewData){
		return(
			<List.Item className={styles.listItem}>
				<Image avatar src='/images/avatar.png' />
				<List.Content>
					<List.Header>{reviewData.reviewer} <Stars rating={reviewData.rating} /></List.Header>
					<List.Description>

						<div>{reviewData.comment}</div>
					</List.Description>
				</List.Content>
			</List.Item>
		);
	}
	return(<div></div>);
};

export default ReviewListItem;

