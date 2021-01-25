import { Component } from 'react';
import PropTypes from 'prop-types';

import { animateScroll as scroll } from 'react-scroll';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  };

  scroll = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <button onClick={this.scroll} className="Button" type="button">
        Load more
      </button>
    );
  }
}

export default Button;
