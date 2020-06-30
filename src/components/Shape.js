import PropTypes from 'prop-types';

export const AdressShape = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
});

export const CommentShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const CommentListShape = PropTypes.shape({
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});

export const PostListShape = PropTypes.shape({
  postList: PropTypes.arrayOf(PropTypes.PostShape).isRequired,
});

export const UserShape = PropTypes.shape({
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const PostShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(UserShape).isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});
