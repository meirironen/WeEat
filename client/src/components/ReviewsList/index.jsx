import React, {Component} from 'react';
import {connect} from "react-redux";
import {Icon, List, Message} from "semantic-ui-react";

import {getRestaurantReviews} from "../../redux/actions/reviews";
import ReviewListItem from "../ReviewListItem";
import styles from "./styles.module.scss"

class ReviewsList extends Component{
    componentDidMount() {
        this.props.getRestaurantReviews(this.props.restId);
    }


    addReviewHandler = (e, data) => {
    }

    render(){
        const {reviews, loaded } = this.props.reviews;
        if (loaded){
            return(
                <div className={styles.reviewListPane}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.title}>Reviews</div>
                        <div className={styles.addReview} onClick={this.addReviewHandler}>
                            <Icon circular color="teal" name="add"/> Add Review
                        </div>
                    </div>
                    <div className={styles.listContainer}>
                        <div className={styles.scrollable}>
                            <List divided verticalAlign='middle' relaxed='very'>
                            {reviews && reviews.length > 0
                                ? reviews.map(review => (
                                    <ReviewListItem reviewData={review} key={review.id} />
                                )):  <Message visible>No reviews yet... be the first one!</Message> }
                            </List>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (<div>Loading....</div>)
        }
    }
}



const mapStateToProps =  (state) => {
    return {
        reviews: state.reviews,
        loaded: state.reviews.loaded
    };
};

export default connect(mapStateToProps, {getRestaurantReviews})(ReviewsList);
