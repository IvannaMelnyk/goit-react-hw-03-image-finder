import PropTypes from 'prop-types';
// import s from './Container.module.css';

function Container({ children }) {
  return <div>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
