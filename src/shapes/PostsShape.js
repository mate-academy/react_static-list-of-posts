import PropTypes from 'prop-types';
import { UserShape } from './UserShape';
import { CommentShape } from './CommentShape';

export const PostsShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
}).isRequired;
