import React, {Component} from 'react'
import {Select} from "semantic-ui-react";
import {applyRestaurantFilter} from "../../redux/actions/restaurant";
import {connect} from "react-redux";
import styles from "./styles.module.scss"

class FilterItem extends Component{

    handleOnChange = (e,data) =>{
        this.props.applyRestaurantFilter({filterKey: this.props.filterKey ,value: data.value});
    };

    render(){
        const { label, placeholder, options} = this.props;
        return (
            <div className={styles.filterItem}>
                <label>{label}</label>
                <Select placeholder={placeholder} options={options} onChange={this.handleOnChange}/>
            </div>
        )
    }
}

const mapDispatchToProps = { applyRestaurantFilter };

export default connect(null,mapDispatchToProps)(FilterItem);
