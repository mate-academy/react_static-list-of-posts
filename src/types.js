import PropTypes from 'prop-types';

export const CommentType = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const CommentListType = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    ...CommentType,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({ ...UserType }).isRequired,
  ...CommentListType,
};

export const PostListType = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    ...PostType,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
