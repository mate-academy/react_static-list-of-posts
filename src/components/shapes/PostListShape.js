import PropTypes from 'prop-types';
import { PostShape } from './PostShape';

export const PostListShape = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
