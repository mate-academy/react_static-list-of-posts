import PropTypes from 'prop-types';

export const commentPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
});

export const commentListPropTypes = {
  comments: PropTypes.arrayOf(commentPropTypes).isRequired,
};

export const postPropTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

export const postListPropTypes = PropTypes.arrayOf(postPropTypes);

export const userPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
});
