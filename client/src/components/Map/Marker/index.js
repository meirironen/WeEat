import React, {Fragment} from 'react';
import {Popup, PopupContent} from "semantic-ui-react";
import styles from './styles.module.scss';
import PopupHeader from "semantic-ui-react/dist/commonjs/modules/Popup/PopupHeader";
import Stars from "../../Stars";
import {CuisineIconsMapping} from "../../../utlis/constants";

const Marker = (props: any) => {
    const markerStyles = `${styles.pin} ${styles.bounce}`;
    return (
        <Fragment>
            {props.show && <div id={`marker-${props.markerData.key}`} className={styles.pulse} />}
            {<Popup
                trigger={<div className={markerStyles}></div>} open={props.show}>
                <PopupHeader>
                    <div> {props.markerData.name} <Stars rating={props.markerData.rating}/> </div>
                </PopupHeader>
                <PopupContent>
                    <div>
                        <div className={styles.markerContainer}>
                            <div className={styles.cuisineText}>{props.markerData.cuisine}</div>
                            <div className={styles.cuisineIcon}> {CuisineIconsMapping[props.markerData.cuisine]}</div>
                        </div>
                    </div>
                </PopupContent>
             </Popup>
            }
        </Fragment>
    );
};

export default Marker;
