import PropTypes from 'prop-types';
import { userShape } from './FullUserShape';
import { commentsShape } from './CommentsShape';

export const postShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userShape.isRequired,
  comments: PropTypes.arrayOf(commentsShape).isRequired,
});
