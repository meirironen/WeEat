import React from "react";
import Stars from '../Stars'
import {List, Image} from 'semantic-ui-react';

const ReviewListItem = (props) => {

	const { reviewData } = props;
	if (reviewData){
		return(
			<List.Item key={reviewData.id}>
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

