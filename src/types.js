import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
});

export const PostType = PropTypes.shape({
  title: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  comment: CommentType.isRequired,
  user: UserType.isRequired,
});
