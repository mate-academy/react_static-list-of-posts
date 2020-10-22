import PropTypes from 'prop-types';

import { UserTypes } from './UserTypes';
import { CommentTypes } from './CommentTypes';

export const PostTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(UserTypes).isRequired,
  postComments: PropTypes.arrayOf(CommentTypes).isRequired,
  id: PropTypes.number.isRequired,
};
