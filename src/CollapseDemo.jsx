import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import { Table } from 'reactable';

class CollapseDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  };

  handleClick = () => {
    console.log('pressed');
    this.setState(
      prevState => (
        {isOpened: !prevState.isOpened}
      )
    );
  }

  render() {
    return(
      <div>
        <br />
        <div onClick = {this.handleClick}  style = {{cursor: 'pointer'}}>
          Random content
        </div>
        <Collapse isOpened={this.state.isOpened} >
          <Table className="table" data={[
            { Name: 'Griffin Smith', Age: 18 },
            { Age: 23,  Name: 'Lee Salminen' },
            { Age: 28, Position: 'Developer', Name: 'Test' },
          ]} />

        </Collapse>
      </div>
  )}
}

export default CollapseDemo;
