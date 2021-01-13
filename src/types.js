import PropTypes from 'prop-types';

export const PostListType = {
  post: PropTypes.arrayOf().isRequired,
};

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.arrayOf().isRequired,
  commenters: PropTypes.arrayOf().isRequired,
};

export const UserType = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAddress: PropTypes.object.isRequired,
};

export const CommentListType = {
  comments: PropTypes.arrayOf().isRequired,
};

export const CommentType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
