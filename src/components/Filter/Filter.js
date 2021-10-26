import React from "react";
import PropTypes from 'prop-types';

class Filter extends React.Component{

    static propTypes = {
filter : PropTypes.string ,
handleFilterInput : PropTypes.func
    }

    render(){
        return(
            <div>
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