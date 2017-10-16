import React, { Component } from 'react';
import { css } from 'emotion';
import  _ from 'lodash';

import TableBody from './TableBody';

class Table extends Component {
  state = {
    name: '',
    rev: false,
    data: this.props.data,
  };

  render() {
    const { header, data, locale } = this.props;
    
    const widthHeader = header.map((h) => h.width);
    const sum = widthHeader.reduce((el, prev) => el + prev, 0);
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
      cursor: pointer;
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

    const sort = (column, rev) => {
      return rev ? _.chain(data).sortBy(column).reverse().value() :
        _.chain(data).sortBy(column).value();
    };

    const listHeader = header.map((h) => {
      const onClick = ev => {
        ev.preventDefault();
        this.setState(prevState => ({
            name: h.name,
            rev: !prevState.rev,
          })
        );
        this.setState (prevState => ({
            data: sort(prevState.name, prevState.rev),
          })
        );
      };
      return (
        <div key={h.name} onClick={onClick} > {locale[h.name]} </div>
      );
    });

    return (
      <div>
        <div className={header_css}>
          {listHeader}
        </div>
        <TableBody
          header={header}
          data={this.state.data}
          table_body={table_body}
          table_element={table_element}
        />
      </div>
    );
  }
}

export default Table;
