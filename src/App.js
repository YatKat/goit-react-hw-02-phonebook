import React, {Component} from 'react';
import  styles from './App.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';


class App extends Component {

  state = {
    filter : '',
    contacts : [
    {id: 'id-1', name: 'My test Name', number: '111-22-33'},
    ]
  };

  addContact = data => {
    const uid = shortid.generate();
    const contact = {
      id : uid,
      name : data.name,
      number : data.number
    }

    if(this.state.contacts.find(contact => contact.name === data.name)){
        alert(`${data.name} already exists in your phonebook`);
    }else{
      this.setState({
        contacts : this.state.contacts.concat([contact])
      });
    }
  }

  handleFilterInput = ev =>{
    ev.preventDefault();
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    console.log(inputValue);
    this.setState({
      [inputName] : inputValue
    });
  }

  handleDelete = event => {
    const contactToDelete = event.currentTarget.value;
    console.log(contactToDelete);
    this.setState(prevState => 
      ({contacts: prevState.contacts.filter(contact => contact.name !== contactToDelete)}));
  }

    getFilteredContact = () => {
      const {filter, contacts} = this.state;
      console.log(this.state)
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
        <h1>Phonebook</h1>
        <ContactForm userInput = {this.addContact}/>
        <h2>Contacts : </h2>
        <Filter filter = {this.state.filter} handleFilterInput={this.handleFilterInput}/>
        <ContactList contacts = {contacts} handleDelete = {this.handleDelete}/>
      </div>
    );
  }
  
}

export default App;
