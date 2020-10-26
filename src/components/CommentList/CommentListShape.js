
import PropTypes from 'prop-types';
import { CommentShape } from '../Comment/CommentShape';

export const CommentListShape = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
