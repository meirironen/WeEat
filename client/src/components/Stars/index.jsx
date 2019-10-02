import React from "react";
import {Rating} from "semantic-ui-react";
import styles from './styles.module.scss'

class Stars extends React.Component{
    render() {
        return(
            <Rating className={styles.Rating} disabled="true" icon='star' defaultRating={this.props.rating} maxRating={3} />
        );
    }
}

export default Stars;