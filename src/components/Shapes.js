import PropTypes from 'prop-types';

export const ShapeComment = PropTypes.shape({
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
});

export const ShapePostItem = PropTypes.shape({
  body: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
});

export const ShapePostComments = PropTypes.shape({
  comments: PropTypes.arrayOf(ShapeComment).isRequired,
});

export const ShapePostList = PropTypes.shape({
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
});
