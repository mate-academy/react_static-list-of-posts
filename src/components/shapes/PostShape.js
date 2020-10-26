import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';
import { UserShape } from './UserShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});
