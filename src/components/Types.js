import PropTypes from 'prop-types';

export const UserProp = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
});

export const CommentProp = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

export const CommentsListProp = PropTypes.arrayOf(CommentProp);

export const PostType = PropTypes.shape({
  body: PropTypes.string.isRequired,
  user: UserProp.isRequired,
  comments: CommentsListProp.isRequired,
  title: PropTypes.string.isRequired,
});

export const PostListType = PropTypes.arrayOf(PostType);
