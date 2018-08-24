import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';
import './App.css';

class App extends Component {
  state = {
      inputValue: ""      
    }

  updateInputValue = ( event ) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  deleteCharHandler = ( index ) => {
    const charList = this.state.inputValue.split("");
    charList.splice(index, 1);
    const returnValue = charList.join("");
    this.setState({
      inputValue: returnValue
    })
  }

  render() {
    const charList = this.state.inputValue.split("").map((char, index) => {
      return <CharComponent
        character={char}
        key={index}
        changed={() => this.deleteCharHandler(index)} />
    })

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.updateInputValue(event)} />
        <p>: {this.state.inputValue}</p>
        <ValidationComponent
          value={this.state.inputValue}/>
          {charList}
      </div>
    );
  }
}

export default App;
