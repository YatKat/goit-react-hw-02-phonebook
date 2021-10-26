import React from "react";

class ContactList extends React.Component{

    render(){

        return(
            <div>
                <ul>
          {this.props.contacts.map(contact =>{
           return( <li key={contact.id}>{contact.name} {contact.number}</li>);
          })}  
        </ul>
            </div>
        )
    }
};

export default ContactList;