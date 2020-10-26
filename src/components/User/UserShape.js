import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});
