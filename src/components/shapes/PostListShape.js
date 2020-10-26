import PropTypes from 'prop-types';
import { PostShape } from './PostShape';

export const PostListShape = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      ...PostShape,
    }).isRequired,
  ).isRequired,
};
