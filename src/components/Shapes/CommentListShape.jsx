import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';

export const CommentListShape = ({
  comments: PropTypes.arrayOf(CommentShape).isRequired,
}).isRequired;
