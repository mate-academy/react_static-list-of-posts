import PropTypes from 'prop-types';

export const CommentType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export const AuthorType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
  id: PropTypes.number.isRequired,
});
