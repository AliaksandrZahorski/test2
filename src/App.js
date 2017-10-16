import React, {Component} from 'react';
import MyButton from './MyButton'
import InputForm from './InputForm';
import CollapseDemo from './CollapseDemo';
import Table from './Table';

import { header, data, locale } from './fixtures';

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <MyButton state={false}>
          testChild
        </MyButton>
        <InputForm inputValue={1}/>
        <CollapseDemo />
        */}
        <Table header={header} data={data} locale={locale}/>
      </div>
    );
  }
}

export default App
