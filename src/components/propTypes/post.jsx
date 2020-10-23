import PropTypes from 'prop-types';

export const PostListShape = {
  postlist: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};
