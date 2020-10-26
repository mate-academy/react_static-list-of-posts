import PropTypes from 'prop-types';

import { CommentPropTypes } from './CommentPropTypes';
import { UserPropTypes } from './UserPropTypes';

export const PostPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserPropTypes).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentPropTypes).isRequired,
  ).isRequired,
};
