import PropTypes from 'prop-types';

export const CommentShape = {
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export const UserShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.string).isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.objectOf(PropTypes.string).isRequired,
};

export const PostShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.shape(UserShape)).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentShape)).isRequired,
};
