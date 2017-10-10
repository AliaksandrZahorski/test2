import React, { Component } from 'react';
import { css } from 'emotion';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  render() {
    const header_css = css`
      display: grid;
      width: 100%;
      grid-template-columns: 30% 20%;
      grid-column-gap: 15px;
      font-weight: bold;
    `;

    const locale = {
      one: " заголовок один ",
      two: " заголовок не один ",
    };

    const listHeader = this.props.header.map((h) => <div key={h.name}> {locale[h.name]} </div>);

    const listBody = this.props.data.map((row, index) => {
       return (
         <div key={index}>
            {this.props.header.map((h) => <span key={h.name}> {row[h.name]} </span>)}
         </div>
       );
    });

    return (
      <div>
        <div className={header_css}>
          {listHeader}
        </div>
        <div className="table_body">
          {listBody}
        </div>
      </div>
    );
  }
}

export default Table;
