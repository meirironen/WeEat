import React, {Fragment} from 'react';
import styles from './styles.module.scss';

const Marker = (props: any) => {
    const { color, name, id } = props;

    const markerStyles = `${styles.pin} ${styles.bounce}`;
    return (
        <Fragment>
            <div
                className={markerStyles}
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
            />s

            {props.show && <div className={styles.pulse} />}
        </Fragment>
    );
};

export default Marker;
