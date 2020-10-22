import PropTypes from 'prop-types';
import { UserPropTypes } from './UserPropTypes';
import { CommentPropTypes } from './CommentPropTypes';

export const PostPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserPropTypes).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)).isRequired,
};
