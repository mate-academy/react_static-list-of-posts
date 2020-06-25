import PropTypes from 'prop-types';
import { UserTypes } from './UserTypes';
import { CommentsTypes } from './CommentsTypes';

export const PostTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserTypes,
  comments: PropTypes.arrayOf(
    CommentsTypes,
  ).isRequired,
});
