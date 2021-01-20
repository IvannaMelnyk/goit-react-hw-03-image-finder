import PropTypes from 'prop-types';

function EmptyField({ message }) {
  return (
    <div role="alert">
      <p>We're sorry but something went wrong: {message}</p>
    </div>
  );
}

EmptyField.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyField;
