import PropTypes from 'prop-types';
import { CommentListShape } from './CommentListShape';
import { UserShape } from './UserShape';

export const PostShape = PropTypes.shape({
  author: UserShape,
  commentsOfPost: CommentListShape,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
