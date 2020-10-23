import PropTypes from 'prop-types';

export const CommentListShape = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ),
};
