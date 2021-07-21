import PropTypes from 'prop-types';

export const CommentPropTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const UserPropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adress: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }),
};

export const PostPropTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.shape(UserPropTypes).isRequired,
  comments: PropTypes.shape(CommentPropTypes).isRequired,
};
