import PropTypes from 'prop-types';

export const CommentType = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export const AuthorType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }),
};
