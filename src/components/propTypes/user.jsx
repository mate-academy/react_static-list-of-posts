import PropTypes from 'prop-types';

export const UserShape = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ),
};
