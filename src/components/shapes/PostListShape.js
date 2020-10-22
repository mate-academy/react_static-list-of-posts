import PropTypes from 'prop-types';
import { PostShape } from './PostShape';

export const PostListShape = PropTypes.shape({
  posts: PropTypes.arrayOf(PostShape),
}).isRequired;
