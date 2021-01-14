import PropTypes from 'prop-types';

export const addressType = PropTypes.shape({
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
});

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: addressType.isRequired,
});

export const commentType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const commentsType = PropTypes.arrayOf(
  PropTypes.shape(commentType),
);

export const postType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userType,
  comments: commentsType.isRequired,
};
