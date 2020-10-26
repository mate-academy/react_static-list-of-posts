import PropTypes from 'prop-types';
import CommentShape from './CommentShape';
import UserShape from './UserShape';

const PostShape = {
  postItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: UserShape,
    comments: CommentShape,
  }).isRequired,
};

export default PostShape;
