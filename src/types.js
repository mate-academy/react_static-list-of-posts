import PropTypes from 'prop-types';

export const TypeComment = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.number.isRequired,
  body: PropTypes.number.isRequired,
});

export const TypePost = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comment: TypeComment.isRequired,
});

export const TypeUser = PropTypes.shape(
  {
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  },
);
