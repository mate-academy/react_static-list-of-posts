import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const UserType = PropTypes.shape({
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
});

export const PostType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.UserType,
  comments: PropTypes.arrayOf(CommentType),
});
