import React from "react";
import shortid from 'shortid';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component{

    state = {
        name: '',
        number : ''
    }

    handleInput = ev =>{
        ev.preventDefault();
        const inputName = ev.currentTarget.name;
        const inputValue = ev.currentTarget.value;
        this.setState ({
            [inputName] : inputValue
        });
      }

      handleNewContact = ev => {
          ev.preventDefault();
          this.props.userInput(this.state);
          this.reset();
      }

      reset = () => {
        this.setState({
          name : '',
          number : ''
        });
      };

    render(){
        const nameUid = shortid.generate();
        const numberUid = shortid.generate();

        return(
            <div className = {styles.container}>
                <form className ={styles.form} onSubmit={this.handleNewContact}>
                    <label htmlFor={nameUid}>Name</label>
                        <input
                        id = {nameUid}
                        type ="text"
                        name = "name"
                        placeholder= "Enter contact name here"
                        value = {this.state.name}
                        onChange ={this.handleInput}/>
          
                    <label htmlFor={numberUid}>Number</label>
                        <input
                        id = {numberUid} 
                        type ="text"
                        name = "number"
                        placeholder= "Format: +38011-111-11-11"
                        value = {this.state.number}
                        onChange ={this.handleInput}/>
          
                    <button type="submit">Add contact</button>
                </form>
            </div>
        )
    }
}
export default ContactForm;