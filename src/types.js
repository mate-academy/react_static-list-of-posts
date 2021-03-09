import PropTypes from 'prop-types';

export const commentsType = {
  postId: PropTypes.number,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string,
};

export const postsType = {
  userId: PropTypes.number,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};

export const userType = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
