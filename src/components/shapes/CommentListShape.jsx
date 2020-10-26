import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';

export const CommentListShape = PropTypes.shape({
  list: PropTypes.arrayOf(CommentShape).isRequired,
}).isRequired;
