import PropTypes from 'prop-types';
import { UserShape } from './UserShape';
import { CommentListShape } from './CommentListShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape,
  row: PropTypes.number.isRequired,
  postComments: PropTypes.arrayOf(CommentListShape).isRequired,
});
