import React, {Component} from 'react'
import createFilters from "../../utlis/create-filters";
import {connect} from "react-redux";
import styles from './styles.module.scss'
import { Select } from "semantic-ui-react";
import {applyRestaurantFilter} from "../../redux/actions/restaurant";

class FilterBar extends Component{

    // onChange = (e, data) =>{
    //     console.log(this.props);
    //     debugger;
    //     this.props.applyRestaurantFilter('ronen');
    // }

    render() {
        const {cuisines} = this.props.cuisines;
        const filters = createFilters(cuisines);
        console.log(filters);
        return (
            <div className={styles.FilterGroup}>
                {filters.map(
                    ({ filterKey, label, placeholder, options, onChange}, index) => {
                        console.log(`building filter`);
                        console.log(filterKey);

                        return (

                            <div key={index}>
                                <label>{label}</label>
                                <Select {...{ placeholder, options}} />
                            </div>
                        )
                    }
                )}
            </div>
        );
    }
}



const mapStateToProps =  ({ cuisines }) => {
    return {cuisines};
};

const mapDispatchToProps = { applyRestaurantFilter };

export default connect(mapStateToProps,mapDispatchToProps)(FilterBar);
