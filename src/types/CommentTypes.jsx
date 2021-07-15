import PropTypes from 'prop-types';

const CommentTypes = {
  comments: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentTypes;
