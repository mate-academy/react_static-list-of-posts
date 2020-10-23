import PropTypes from 'prop-types';
import { PostPropTypes } from './post';

export const PostListPropTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      ...PostPropTypes,
    }).isRequired,
  ).isRequired,
};
