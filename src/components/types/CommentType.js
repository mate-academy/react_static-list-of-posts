import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
