import PropTypes from 'prop-types';

export const userTypes = {
  users: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.objectOf(PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  post: PropTypes.objectOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
  })).isRequired,
};
