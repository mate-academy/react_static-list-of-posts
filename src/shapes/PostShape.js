import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';
import { UserShape } from './UserShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string,
  body: PropTypes.string,
  user: UserShape,
  comments: CommentShape,
});
