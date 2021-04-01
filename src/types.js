import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string,
  }).isRequired,
}).isRequired;

export const CommentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;

export const CommentListType = PropTypes.arrayOf(CommentType).isRequired;

export const PostType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  comments: PropTypes.shape(CommentListType).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}).isRequired;

export const PostListType = PropTypes.arrayOf(PostType).isRequired;
