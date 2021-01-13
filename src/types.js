import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
  }).isRequired,
});

export const commentType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
);
