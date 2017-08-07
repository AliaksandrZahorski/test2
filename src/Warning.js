import React, {Component} from 'react';

class Warning extends Component {
  render() {
      const list = this.props.list;
      const listItems = list.map( item => <p key={item.toString()}> {item} </p> );
      if (this.props.isWarning) {
        return <div> {listItems} </div>;
      }
      return null;
  }
}

export default Warning;
