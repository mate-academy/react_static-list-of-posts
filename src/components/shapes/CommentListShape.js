import PropTypes from 'prop-types';

export const CommentListShape = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}.isRequired;
