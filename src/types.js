import PropTypes from 'prop-types';

export const addressType = PropTypes.shape({
  city: PropTypes.string.isRequired,
  geo: PropTypes.object.isRequired,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
});

export const userType = PropTypes.shape({
  address: addressType.isRequired,
  company: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});

export const commentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const userPostCommentType = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comment: PropTypes.arrayOf(commentType).isRequired,
  user: userType.isRequired,
});
