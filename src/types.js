import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const CommentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const PostType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
});
