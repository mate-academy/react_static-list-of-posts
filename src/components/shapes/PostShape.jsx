import PropTypes from 'prop-types';
import { UserShape } from './UserShape';
import { CommentShape } from './CommentShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comment: PropTypes.arrayOf(CommentShape).isRequired,
}).isRequired;
