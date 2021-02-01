import PropTypes from 'prop-types';

export const TypeGeoLocation = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});

export const TypeFullAdress = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: TypeGeoLocation.isRequired,
});

export const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: TypeFullAdress.isRequired,
});

export const TypeComment = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
});

export const TypePost = PropTypes.shape({
  user: TypeUser.isRequired,
  comments: TypeComment.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
});
