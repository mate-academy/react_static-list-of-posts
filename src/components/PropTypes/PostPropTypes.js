import PropTypes from 'prop-types';
import { UserPropTypes } from './UserPropTypes';
import { CommentPropTypes } from './CommentPropTypes';

export const PostPropTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

  user: PropTypes.shape(UserPropTypes).isRequired,

  comments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)).isRequired,
};
