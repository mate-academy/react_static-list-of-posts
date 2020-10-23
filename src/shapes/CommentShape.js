import PropTypes from 'prop-types';

const CommentShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;

export default CommentShape;
