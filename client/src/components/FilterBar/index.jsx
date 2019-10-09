import React, {Component} from 'react'
import createFilters from "../../utlis/create-filters";
import {connect} from "react-redux";
import styles from './styles.module.scss'
import FilterItem from "./FilterItem";

class FilterBar extends Component{

    render() {
        const {cuisines} = this.props.cuisines;
        const filters = createFilters(cuisines || {});
        return (
            <div className={styles.FilterGroup}>
                {filters.map(
                    ({ filterKey, label, placeholder, options, filterMethod}, index) =>
                        <FilterItem {...{ filterKey, label, placeholder, options}} key={index}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ cuisines }) => {
    return {cuisines};
};


export default connect(mapStateToProps)(FilterBar);
