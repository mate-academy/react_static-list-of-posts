import PropTypes from 'prop-types';

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;

export const CommentType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const CommentListType = {
  comment: PropTypes.shape(CommentType).isRequired,
};

export const PostType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comment: PropTypes.shape(CommentType).isRequired,
};

export const PostListType = {
  listOfPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
