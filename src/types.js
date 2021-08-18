import PropTypes from 'prop-types';

export const TypeComment = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

export const TypeCommentList = PropTypes.arrayOf(TypeComment);

export const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
});

export const TypePost = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: TypeCommentList,
  user: TypeUser.isRequired,
});

export const TypePostList = PropTypes.arrayOf(TypePost);
