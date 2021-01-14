import PropTypes from 'prop-types';

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object,
  commenters: PropTypes.array,
};

export const PostListType = {
  post: PropTypes.arrayOf(PropTypes.shape(PostType)).isRequired,
};

export const UserType = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAddress: PropTypes.object.isRequired,
};

export const CommentType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export const CommentListType = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentType)).isRequired,
};
