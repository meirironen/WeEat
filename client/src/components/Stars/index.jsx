import React from "react";
import {Rating} from "semantic-ui-react";
import styles from './styles.module.scss'

const Stars = (props) => {
    return (
        <Rating className={styles.rating} disabled={true} icon='star' defaultRating={props.rating} maxRating={3} />
    );
};

export default Stars;