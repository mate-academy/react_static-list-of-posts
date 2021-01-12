import PropTypes from 'prop-types';

export const commentType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export const postType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
});

export const usersType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
});
