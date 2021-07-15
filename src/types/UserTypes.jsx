import PropTypes from 'prop-types';

const UserTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
});

export default UserTypes;
