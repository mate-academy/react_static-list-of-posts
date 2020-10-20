
import PropTypes from 'prop-types';

export const UserShape = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const PostListShape = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const PostShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape = {
      user: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,

  comments: PropTypes.objectOf(
    PropTypes.shape = {
      comments: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,
};

export const CommentListShape = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const CommentShape = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
