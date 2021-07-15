import PropTypes from 'prop-types';

const PostTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostTypes;
