import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;
