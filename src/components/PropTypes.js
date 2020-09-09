import PropTypes from 'prop-types';

export const UserPropTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export const PostPropTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export const PostListPropTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
  })),
  comments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
  })),
};

export const CommentPropTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const CommentListPropTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
};
