import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';

export const CommentListShape = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ...CommentShape,
    }).isRequired,
  ).isRequired,
};
