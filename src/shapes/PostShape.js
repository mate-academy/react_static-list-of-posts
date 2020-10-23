import PropTypes from 'prop-types';
import UserShape from './UserShape';
import CommentShape from './CommentShape';

const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
}).isRequired;

export default PostShape;
