import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Warning from './Warning';

const numbers = [1, 2, 3, 4];

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isPressed: props.state};
  };

   static propTypes = {
     state: PropTypes.bool.isRequired,
   };

  handleClick = () => {
    this.setState(
      prevState => (
        {isPressed: !prevState.isPressed}
      )
    );
  }

  render() {
    return (
      <div>
             <Warning isWarning={this.state.isPressed} list = {numbers}/>
             <button onClick = {this.handleClick}>
               { this.state.isPressed ? 'true': 'false' }
             </button>
      </div>
    );
  };

}

export default MyButton;
