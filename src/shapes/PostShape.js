import PropTypes from 'prop-types';
import { UserShape } from './UserShape';
import { CommentShape } from './CommentShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string,
  body: PropTypes.string,
  user: UserShape,
  comments: PropTypes.arrayOf(CommentShape),
}).isRequired;
