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
        width: 2,
      },
      {
        name: 'two',
        width: 5,
      },
      {
        name: 'three',
        width: 1,
      },
    ];
    const data = [
      {
        one: 'column one',
        two: 2,
        three: 'XX',
      },
      {
        one: 'column two',
        two: 5,
        three: '--',
      },
      {
        two: 456,
        three: 'XX',
      },
      {
        one: 'column three',
        three: 'zzzzzz',
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
