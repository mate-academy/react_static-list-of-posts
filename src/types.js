import PropTypes from 'prop-types';

export const TypeUser = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,

  geo: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
  }),

  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  }),
});

export const TypeComments = PropTypes.arrayOf(
  PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    postId: PropTypes.number.isRequired,
  }),
);

export const TypePost = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
});
