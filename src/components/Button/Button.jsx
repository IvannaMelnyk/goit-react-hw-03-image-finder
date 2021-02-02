import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="Loader-button">
        <button className="Button" type="button" onClick={this.props.onClick}>
          Load More
        </button>
      </div>
    );
  }
}
