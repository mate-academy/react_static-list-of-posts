import PropTypes from 'prop-types';

import { UserShape } from './UserShape';
import { CommentShape } from './CommentShape';

export const PostShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserShape).isRequired,
  postComments: PropTypes.arrayOf(CommentShape).isRequired,
  id: PropTypes.number.isRequired,
};
