import React from 'react';
import classNames from "classnames";
import {Popup,PopupHeader, PopupContent} from "semantic-ui-react";

import styles from './styles.module.scss';
import Stars from "../../Stars";
import {CuisineIconsMapping} from "../../../utlis/constants";

const Marker = (props) => {
    return (
        <>
            {props.show && <div className={styles.pulse} />}
            {<Popup
                trigger={<div className={classNames(styles.pin, styles.bounce)}></div>} open={props.show}>
                <PopupHeader>
                    <div className={styles.headerContainer}>
                        <div> {props.markerData.name} </div>
                        <Stars rating={props.markerData.rating}/>
                    </div>
                </PopupHeader>
                <PopupContent>
                    <div className={styles.markerContainer}>
                        <div className={styles.cuisineIcon}> {CuisineIconsMapping[props.markerData.cuisine]}</div>
                        <div className={styles.cuisineText}>{props.markerData.cuisine}</div>
                    </div>
                </PopupContent>
             </Popup>
            }
        </>
    );
};

export default Marker;
