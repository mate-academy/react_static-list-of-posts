import PropTypes from 'prop-types';
import { PostShape } from './PostShape';

export const PostListShape = {
  listOfPosts: PropTypes.arrayOf(PostShape).isRequired,
};
