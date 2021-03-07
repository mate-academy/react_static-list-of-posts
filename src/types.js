import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
});

export const postType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType.isRequired,
  comments: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export const commentType = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
