import PropTypes from 'prop-types';

export const CommentShape = PropTypes.shape({
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
