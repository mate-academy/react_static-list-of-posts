import PropTypes from 'prop-types';
import { CommentListShape } from './CommentListShape';
import { UserShape } from './UserShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: UserShape,
  postComments: CommentListShape,
}).isRequired;
