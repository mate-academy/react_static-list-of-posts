import PropTypes from 'prop-types';

export const commentListShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
});
