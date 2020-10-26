import PropTypes from 'prop-types';
import { PostShape } from '../Post/PostShape';

export const PostListShape = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
