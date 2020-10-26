import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';

export const CommentListShape = PropTypes.shape({
  comments: CommentShape.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;
