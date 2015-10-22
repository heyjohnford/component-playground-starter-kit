'use strict';

import React, {Component, PropTypes} from "react";

class Button extends Component {

  render() {
    return (
      <button type="button" onClick={this.props.onClick} style={this.props.buttonStyle}>
        {this.props.children}
      </button>
    );
  }

};

Button.propTypes = {
  buttonStyle: PropTypes.object,
  onClick: PropTypes.func
};

Button.defaultProps = {
    darkMode: false
};

export default Button;
