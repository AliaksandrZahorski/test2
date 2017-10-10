import React, {Component} from 'react';
import MyButton from './MyButton'
import InputForm from './InputForm';
import CollapseDemo from './CollapseDemo';
import Table from './Table';

class App extends Component {
  render() {
    const header = [
      {
        name: 'one',
        width: 1,
      },
      {
        name: 'two',
        width: 5,
      },
    ];
    const data = [
      {
        one: 'column one',
        two: 1,
      },
      {
        one: 'column two',
        two: 5,
      },
      {
        one: 'column three',
      },
    ];
    return (
      <div>
        <MyButton state={false}>
          testChild
        </MyButton>
        <InputForm inputValue={1}/>
        <CollapseDemo />
        <Table header={header} data={data}/>
      </div>
    );
  }
}

export default App
