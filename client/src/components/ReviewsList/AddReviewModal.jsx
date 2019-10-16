import React, {Component} from "react";
import {
    Modal,
    Form,
    Button,
    Select,
    TextArea,
    Input,
    Message
} from "semantic-ui-react";

import serverapi from "../../apis/serverapi";
import {RATING_OPTIONS} from "../../utlis/create-filters";
import styles from "./styles.module.scss"

const ERROR_MESSAGES = {
    name: "Name must have at least 3 letters and two words",
    rating: "Please choose rating",
    comment: "Comment must be at least 15 characters long",
    global: "An error has occured adding review"
};

const isNameValid = (name: string) =>
    name.length >= 3 && name.split(" ").filter(n => n).length >= 2;

const isRatingValid = (rating: number) => !!rating;

const isCommentValid = (comment: string) => comment.length >= 15;

const validators = {
    name: isNameValid,
    rating: isRatingValid,
    comment: isCommentValid
};
const hasError = (name: string, value: any) => !validators[name](value);

const INITAL_STATE = {
    name: "",
    rating: 0,
    comment: "",
    loading: false,
    saveError : false,
    error: { name: false, rating: false, comment: false },
}

export class AddReviewModal extends Component {
    state = INITAL_STATE;

    handleChange = (e: SyntheticEvent, { name, value }: InputChange) => {
        const updateOb = {};
        updateOb[name] = value;
        updateOb.error = Object.assign({}, this.state.error, {
            [name]: hasError(name, value)
        });
        this.setState(updateOb);
    };

    onModalClose = ()=>{
        this.setState(INITAL_STATE);
        this.props.closeHandler();
    };

    handleSubmit = async () => {
        const { restId} = this.props;
        const { error, name, rating, comment } = this.state;

        let allValid = true;
        const newErrorMap = Object.keys(error).reduce((errorMap, key) => {
            const value = this.state[key];
            errorMap[key] = hasError(key, value);
            if (allValid) {
                allValid = !errorMap[key];
            }
            return errorMap;
        }, {});
        this.setState({ error: newErrorMap });
        if (allValid) {
            const review = {
                restaurant_id: restId,
                reviewer: name,
                rating,
                comment
            };
            await serverapi.post('/reviews', review)
                .then(()=> this.onModalClose())
                .catch(this.setState({saveError:true}));
        }
    };

    render(){
        const { name, rating,  comment, loading, error } = this.state;
        return (
            <Modal

                dimmer="blurring"
                className={styles.reviewModal}
                open={this.props.showModal}
                onClose={this.onModalClose}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field error={error.name}>
                        <label>Name</label>
                        <Input
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        {error.name && <Message content={ERROR_MESSAGES.name} />}
                    </Form.Field>
                    <Form.Field error={error.rating}>
                        <label>Rating</label>
                        <Select
                            name="rating"
                            placeholder="Rating"
                            options={RATING_OPTIONS}
                            value={rating}
                            onChange={this.handleChange}
                        ></Select>
                        {error.rating && <Message content={ERROR_MESSAGES.rating} />}
                    </Form.Field>
                    <Form.Field error={error.comment}>
                        <label>Comment</label>
                        <TextArea
                            name="comment"
                            placeholder="Comment"
                            value={comment}
                            onChange={this.handleChange}
                        />
                        {error.comment && <Message content={ERROR_MESSAGES.comment} />}
                    </Form.Field>

                    <Button type="submit">Submit</Button>

                    <Message negative hidden={!this.state.saveError}>
                        <p>An error occured please try again </p>
                    </Message>
                </Form>
            </Modal>
        );
    }
}

export default AddReviewModal;
