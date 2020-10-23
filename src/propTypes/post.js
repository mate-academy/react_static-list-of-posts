import PropTypes from 'prop-types';
import { CommentListPropTypes } from './commentList';
import { UserPropTypes } from './user';

export const PostPropTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  ...UserPropTypes,
  ...CommentListPropTypes,
};
