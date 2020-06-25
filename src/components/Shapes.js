import PropTypes from 'prop-types';

export const ShapeAddress = PropTypes.shape({
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
});

export const ShapeComment = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
});

export const ShapeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  adress: ShapeAddress.isRequired,
});

export const ShapePost = PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  comments: ShapeComment.isRequired,
  user: ShapeUser.isRequired,
});
