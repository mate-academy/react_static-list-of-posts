import PropTypes from 'prop-types';
import { CommentType } from '../CommentType/CommentType';
import { UserType } from '../UserType/UserType';

export const PostType = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: CommentType,
  user: UserType,
};
