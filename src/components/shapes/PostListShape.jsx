import PropTypes from 'prop-types';
import { PostShape } from './PostShape';

export const PostListShape = PropTypes.shape({
  list: PropTypes.arrayOf(PostShape).isRequired,
}).isRequired;
