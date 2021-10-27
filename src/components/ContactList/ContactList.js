import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

class ContactList extends React.Component{
    static propTypes = {
contacts : PropTypes.arrayOf(
    PropTypes.shape({
        id : PropTypes.string.isRequired,
        name : PropTypes.string,
        number : PropTypes.string
    })
),
handleDelete : PropTypes.func
    }

    render(){
        return(
            <div className = {styles.list}>
                <ul type = "none">
                    {this.props.contacts.map(contact =>{
                    return(
                        <div key = {contact.id}>
                            <li>{contact.name} 
                            : {contact.number}
                            <button className = {styles.button} name = "contact" value={contact.name} 
                            onClick = {this.props.handleDelete}>Delete</button>
                            </li>
                        </div>);
                    })}  
                </ul>
            </div>
        )
    }
};

export default ContactList;