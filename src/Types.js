import propTypes from 'prop-types';

export const commentType = propTypes.shape({
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
});

export const userType = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  address: propTypes.shape({
    street: propTypes.string.isRequired,
    suite: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
  }).isRequired,
};

export const postType = propTypes.shape({
  userId: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  user: propTypes.shape(userType).isRequired,
  commentsForPost: propTypes.arrayOf(commentType).isRequired,
});
