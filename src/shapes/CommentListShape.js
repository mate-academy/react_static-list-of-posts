import PropTypes from 'prop-types';
import CommentShape from './CommentShape';

const CommentListShape = PropTypes.shape({
  comments: PropTypes.arrayOf(CommentShape).isRequired,
}).isRequired;

export default CommentListShape;
