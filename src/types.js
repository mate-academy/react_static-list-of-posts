import PropTypes from 'prop-types';

export const UserTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  })),
});

export const CommentTypes = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

export const PostTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});
