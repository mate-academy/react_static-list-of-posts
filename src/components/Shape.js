import PropTypes from 'prop-types';

export const AddressShape = PropTypes.shape({
  suite: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
});

export const UserShape = PropTypes.shape({
  address: PropTypes.objectOf(AddressShape).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const CommentShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const PostShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(UserShape).isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});

export const CommentListShape = PropTypes.shape({
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});

export const PostListShape = PropTypes.shape({
  postList: PropTypes.arrayOf(PostShape).isRequired,
});
