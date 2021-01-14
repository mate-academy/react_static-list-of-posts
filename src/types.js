import PropTypes from 'prop-types';

export const UserTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
});

export const CommentTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const PostTypes = PropTypes.shape({
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
  title: PropTypes.string.isRequired,
  user: UserTypes.isRequired,
});
