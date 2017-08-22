import React, {Component} from 'react';
import MyButton from './MyButton'
import InputForm from './InputForm';

class App extends Component {
  render() {
    return (
      <div>
        <MyButton state={false}>
          testChild
        </MyButton>
        <InputForm inputValue={1}/>
       </div>
    );
  }
}

export default App
