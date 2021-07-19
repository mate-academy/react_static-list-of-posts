import propTypes from 'prop-types';

export const postType = propTypes.shape({
  userId: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
});

export const commentType = propTypes.shape({
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
});

export const userType = propTypes.shape({
  id: propTypes.number.isRequired,
  address: propTypes.shape({
    street: propTypes.string.isRequired,
    suite: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
  }),
});
