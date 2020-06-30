import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.objectOf(PropTypes.string),
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.objectOf(PropTypes.string),
});

export const CommentShape = PropTypes.shape({
  postId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
});

export const CommentListShape = PropTypes.shape({
  comments: PropTypes.arrayOf(
    CommentShape,
  ),
});

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: { ...UserShape }.isRequired,
  comments: { ...CommentShape }.isRequired,
});

export const PostListShape = PropTypes.shape({
  posts: PropTypes.arrayOf(
    PostShape,
  ),
});
