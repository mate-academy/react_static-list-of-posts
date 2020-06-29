import PropTypes from 'prop-types';
import { UserPropShape } from '../User/UserShape';
import { CommentShape } from '../Comment/CommentShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

  postUser: UserPropShape.isRequired,

  postComments: PropTypes.arrayOf(
    CommentShape.isRequired,
  ).isRequired,
});
