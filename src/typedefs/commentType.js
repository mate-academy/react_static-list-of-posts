import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
  id: PropTypes.number,
  postId: PropTypes.number,
  authorId: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
});
