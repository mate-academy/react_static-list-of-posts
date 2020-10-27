import PropTypes from 'prop-types';
import { CommentShape } from './comment';

export const CommentListShape = PropTypes.shape({
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});
