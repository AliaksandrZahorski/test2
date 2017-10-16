import React, { Component } from 'react';

class TableBody extends Component {
render() {
  const listBody = this.props.data.map((row, index) => {
     return (
       <div key={index} className={this.props.table_body}>
          {this.props.header.map((h) => <div key={h.name} className={this.props.table_element}> {row[h.name]} </div>)}
       </div>
     );
  });

  return (
    <div>
      {listBody}
    </div>
  )
}
}

export default TableBody;
