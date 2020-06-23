import PropTypes from 'prop-types';
import { userShape } from './FullUserShape';
import { commentsShape } from './CommentsShape';

export const postListShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userShape.isRequired,
  comments: PropTypes.arrayOf(commentsShape).isRequired,
});
