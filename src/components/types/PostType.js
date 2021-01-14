import PropTypes from 'prop-types';

import { UserType } from './UserType';
import { CommentType } from './CommentType';

export const PostType = {
  author: UserType,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
