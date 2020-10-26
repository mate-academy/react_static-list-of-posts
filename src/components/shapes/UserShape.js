import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
}).isRequired;
