import PropTypes from 'prop-types';

import { UserShape } from './UserShape';
import { CommentShape } from './CommentShape';

export const PostShape = {
  author: UserShape,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
