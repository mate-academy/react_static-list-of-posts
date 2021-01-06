import PropTypes from 'prop-types';
import { TypePost } from './PostTypes';

export const TypePostList = PropTypes.shape({
  posts: PropTypes.arrayOf(TypePost),
}).isRequired;
