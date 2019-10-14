import React, {Component} from 'react';
import {connect} from "react-redux";
import {Icon, List, Message} from "semantic-ui-react";

import {getRestaurantReviews} from "../../redux/actions/reviews";
import ReviewListItem from "../ReviewListItem";
import styles from "./styles.module.scss"
import {AddReviewModal} from "./AddReviewModal";

class ReviewsList extends Component{
    state = {
        openModal :false
    };

    modalCloseHandler = ()=> this.setState({openModal:false});

    componentDidMount() {
        this.props.getRestaurantReviews(this.props.restId);
    }

    render(){
        const {reviews, loaded } = this.props;
        if (loaded){
            return(
                <div className={styles.reviewListPane}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.title}>Reviews</div>
                        <div className={styles.addReview} onClick={()=>this.setState({openModal:true})}>
                            <div><Icon circular color="teal" name="add"/>Add Review</div>
                            <AddReviewModal restId={this.props.restId} showModal={this.state.openModal}
                                            closeHandler={this.modalCloseHandler}
                            />
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
        reviews: state.reviews.reviews,
        loaded: state.reviews.loaded
    };
};

export default connect(mapStateToProps, {getRestaurantReviews})(ReviewsList);
