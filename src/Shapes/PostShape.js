import PropTypes from 'prop-types';
import { UserShape } from './FullUserShape';
import { CommentsShape } from './CommentsShape';

export const PostShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,
  comments: PropTypes.arrayOf(CommentsShape).isRequired,
});
