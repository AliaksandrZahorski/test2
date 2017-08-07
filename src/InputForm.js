import React, {Component} from 'react';
import PureFunction from './PureFunction'

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.inputValue,
      calculateValue: props.inputValue,
    };
  }

  calculatePrime = () => {
    this.setState(
      prevState => (
        {calculateValue: prevState.inputValue}
      )
    );
  }

  changeValue = (event) => {
    const value = event.target.value;
    this.setState(
      prevState => (
        {inputValue: value}
      )
    );
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.changeValue}/>
        <button onClick={this.calculatePrime}>Calculate</button>
        <PureFunction text={this.state.calculateValue} />
      </div>
    )
  }
}

export default InputForm;
