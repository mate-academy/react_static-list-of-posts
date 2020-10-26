import PropTypes from 'prop-types';

export const CommentShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
