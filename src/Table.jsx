import React, { Component } from 'react';
import { css } from 'emotion';
import  _ from 'lodash';

class Table extends Component {

  render() {
    const widthHeader = this.props.header.map((h) => h.width);
    const sum = widthHeader.reduce((el, prev) => el + prev, 0);
    console.log(sum);
    const columnRange = widthHeader.map(w => 100 * w / sum);
    const percentRange = columnRange.map(el => el+'%').join(' ');
    const col = css`
      grid-template-columns: ${percentRange};
    `;
    const header_css = css`
      ${col};
      width: 100%;
      display: grid;
      font-weight: bold;
      background-color: #76daff;
      text-align: center;
      padding: 1em 0;
    `;
    const table_body = css`
      ${col};
      width: 100%;
      display: grid;
    `;
    const table_element = css`
      background-color: white;
      padding: 1em 0;
    `;

      const locale = {
      one: " заголовок один ",
      two: " заголовок не один ",
      three: "надпись",
    };

    const column = "two";
    const rev = false;

    const sort = (column, rev) => {
      return rev ? _.chain(this.props.data).sortBy(column).reverse().value() :      _.chain(this.props.data).sortBy(column).value();
    };

    console.log(sort(column, rev));

    const listHeader = this.props.header.map((h) => {
      const onClick = ev => {
        ev.preventDefault();
        console.log(h.name);
      };
      return (
        <div key={h.name} onClick={onClick} > {locale[h.name]} </div>
      );
    });


    const listBody = this.props.data.map((row, index) => {
       return (
         <div key={index} className={table_body}>
            {this.props.header.map((h) => <div key={h.name} className={table_element}> {row[h.name]} </div>)}
         </div>
       );
    });

    return (
      <div>
        <div className={header_css}>
          {listHeader}
        </div>
        <div>
          {listBody}
        </div>
      </div>
    );
  }
}

export default Table;
