import PropTypes from 'prop-types';

function EmptyField({ texterror }) {
  return (
    <div role="alert">
      <p>We're sorry but something went wrong: {texterror}</p>
    </div>
  );
}

EmptyField.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default EmptyField;
