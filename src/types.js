import PropTypes from 'prop-types';

export const CommentType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  address: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentType)),
};

export const PostListType = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostType)).isRequired,
};

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
};

export const CommentListType = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentType)).isRequired,
};
