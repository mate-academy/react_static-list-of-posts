import PropTypes from 'prop-types';
import { PostShape } from './PostShape';

export const PostListShape = PropTypes.arrayOf(PostShape).isRequired;
