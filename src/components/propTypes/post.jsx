import PropTypes from 'prop-types';
import { UserShape } from './user';
import { CommentShape } from './comment';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  users: UserShape,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
});
