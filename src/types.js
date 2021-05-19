import PropTypes from 'prop-types';

export const CommentsType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
);

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }),
};
