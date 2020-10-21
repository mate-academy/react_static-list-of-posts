import PropTypes from 'prop-types';

export const CommentShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
