
import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const PostShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,

  comments: PropTypes.arrayOf(
    PropTypes.shape = {
      comments: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,
};

export const PostListShape = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export const CommentShape = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const CommentListShape = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
