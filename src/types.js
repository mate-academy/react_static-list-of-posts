import PropTypes from 'prop-types';

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    suite: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export const CommentsType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
}));
