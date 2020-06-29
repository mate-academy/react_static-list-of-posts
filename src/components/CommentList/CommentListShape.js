import PropTypes from 'prop-types';
import { CommentShape } from '../Comment/CommentShape';

export const CommentListShape = PropTypes.shape({
  comments: PropTypes.arrayOf(
    CommentShape.isRequired,
  ).isRequired,
});
