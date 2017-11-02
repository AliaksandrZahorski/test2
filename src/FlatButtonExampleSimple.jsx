import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12,
  width: 10,
  minWidth: '40px',
  margin: '12px 0',
};

const left = '<i class="fa fa-angle-double-left" aria-hidden="true"></i>';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label={left} style={style} />
    <FlatButton label="<" style={style} />
    <FlatButton label="1" style={style} />
    <FlatButton label="2" style={style} />
    <FlatButton label="3" style={style} primary />
    <FlatButton label="4" style={style} />
    <FlatButton label=">" style={style} />
    <FlatButton label=">>" style={style} />
  </div>
);

export default FlatButtonExampleSimple;
