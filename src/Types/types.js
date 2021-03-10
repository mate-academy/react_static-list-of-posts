import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }),
  company: PropTypes.shape({
    bs: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});

export const CommentType = PropTypes.shape({
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
});

export const PostType = PropTypes.shape({
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    CommentType.isRequired,
  ),
  user: UserType.isRequired,
});
