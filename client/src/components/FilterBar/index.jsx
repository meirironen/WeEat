import React, {Component} from 'react'
import createFilters from "../../utlis/create-filters";
import {connect} from "react-redux";
import styles from './styles.module.scss'
import { Select } from "semantic-ui-react";

class FilterBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            filters: null
        }
    }
    componentDidMount(){
        const { cuisines } = this.props.cuisines;
        const filters = createFilters(cuisines);
        this.setState({filters});
    }

    render() {
        const { filters } = this.state;
        return (
            <div className={styles.FilterGroup}>
                {filters.map(
                    ({ filterKey, label, placeholder, options, onChange }, index) => (

                        <div>
                            <label>{label}</label>
                            <Select {...{ placeholder, options, onChange }} />
                        </div>
                    )
                )}
            </div>
        );
    }
}



const mapStateToProps =  ({ cuisines }) => {
    return {cuisines};
};

export default connect(mapStateToProps)(FilterBar);
