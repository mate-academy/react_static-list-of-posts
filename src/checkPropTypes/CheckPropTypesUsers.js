import PropTypes from 'prop-types';

export const checkPropTypesUsers = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
