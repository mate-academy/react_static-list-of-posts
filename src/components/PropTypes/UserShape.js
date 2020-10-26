import PropTypes from 'prop-types';

const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export default UserShape;
