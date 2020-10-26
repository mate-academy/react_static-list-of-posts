import PropTypes from 'prop-types';

export const CommentShape = PropTypes.shape({
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string,
}).isRequired;
