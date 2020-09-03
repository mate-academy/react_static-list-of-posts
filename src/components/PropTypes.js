import PropTypes, { string } from 'prop-types';

export const CommentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

export const CommentListType = PropTypes.shape({
  posts: PropTypes.arrayOf(CommentType).isRequired,
});

export const AddressType = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: PropTypes.objectOf(string),
});

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.objectOf(string),
  address: PropTypes.objectOf(AddressType).isRequired,
});

export const PostType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(UserType).isRequired,
  comments: PropTypes.arrayOf(CommentListType).isRequired,
});

export const PostListType = PropTypes.shape({
  posts: PropTypes.arrayOf(PostType).isRequired,
});
