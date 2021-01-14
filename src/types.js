import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
});

export const AuthorType = PropTypes.shape({
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});

export const PostsType = PropTypes.shape({
  author: AuthorType.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
});

export const PostListType = PropTypes.arrayOf(PostsType);
