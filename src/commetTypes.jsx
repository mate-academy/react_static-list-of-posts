import PropTypes from 'prop-types';

export const commentTypes = {
  comments: PropTypes.objectOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  post: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
