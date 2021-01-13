import PropTypes from 'prop-types';

export const CommentShape = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

export const UserShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adress: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
});

export const CommentsShape = PropTypes.arrayOf(
  CommentShape.isRequired,
);

export const PostShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comments: CommentsShape.isRequired,
});

export const PostListShape = PropTypes.arrayOf(
  PostShape.isRequired,
);
