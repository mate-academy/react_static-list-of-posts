import PropTypes from 'prop-types';
import { UserShape } from './UserShape';
import { CommentListShape } from './CommentListShape';

export const PostShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comments: CommentListShape.isRequired,
}).isRequired;
