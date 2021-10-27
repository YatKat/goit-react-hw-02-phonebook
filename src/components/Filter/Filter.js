import React from "react";
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends React.Component{

    static propTypes = {
filter : PropTypes.string ,
handleFilterInput : PropTypes.func
    }

    render(){
        return(
            <div className = {styles.filter}>
                <p>You can find a contact by name:</p>
                    <label>
                        <input 
                        type="text" 
                        name="filter"
                        value={this.props.filter}
                        onChange={this.props.handleFilterInput}/>
                    </label>
            </div>
        )
    }
}
export default Filter;