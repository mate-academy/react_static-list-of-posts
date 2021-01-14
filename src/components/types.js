import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
});

export const commentType = PropTypes.shape({
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

export const commentsListType = PropTypes.arrayOf(commentType.isRequired);

export const postType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType.isRequired,
  comments: commentsListType.isRequired,
});
