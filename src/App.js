import React, {Component} from 'react';
import './App.css';
import shortid from 'shortid';
class App extends Component {

  state = {
    name : "",
    number : "",
    filter : "",
    contacts : [
    {id: 'id-1', name: 'My test Name', number: '111-22-33'},
    ]
  };

  addContact = event =>{
    event.preventDefault();
    const uid = shortid.generate();
    const contact = {
      id : uid,
      name : this.state.name,
      number : this.state.number
    }
    console.log(contact.id, contact.name, contact.number);
    this.setState({
      contacts : this.state.contacts.concat([contact])
    });
    this.reset();
  }

  reset = () => {
    this.setState({
      name : "",
      number : ""
    });
  };

  handleInput = ev =>{
    ev.preventDefault();
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    this.setState ({
        [inputName] : inputValue
    });
  }

  handleFilterInput = ev =>{
    ev.preventDefault();
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    this.setState ({
        [inputName] : inputValue,
    });
  }

    getFilteredContact = () => {
      const {filter, contacts} = this.state;
      if(filter){
        return contacts.filter
          (contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
      }else {
      return contacts;
      }
    }

  render(){
const contacts = this.getFilteredContact();

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input 
            type ="text"
            name = "name"
            placeholder= "Enter contact name here"
            value = {this.state.name}
            onChange ={this.handleInput}/>
          </label>
          <label>
            Number
            <input 
            type ="text"
            name = "number"
            placeholder= "Format: 111-11-11"
            value = {this.state.number}
            onChange ={this.handleInput}/>
          </label>
          <button type="submit">Add contact</button>
        </form>
      <p>You can find a contact by name:</p>
        <label>
          <input 
          type="text" 
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilterInput}/>
        </label>
        
        <p>Contact list : </p>
        <ul>
          {contacts.map(contact =>{
           return( <li key={contact.id}>{contact.name} {contact.number}</li>);
          })}  
        </ul>
      </div>
    );
  }
  
}

export default App;
