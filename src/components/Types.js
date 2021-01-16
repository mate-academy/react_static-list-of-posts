import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const CommentListType = PropTypes.arrayOf(CommentType);

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
});

export const PostType = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object,
    comment: PropTypes.object,
  }).isRequired,
};

export const PostListType = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
