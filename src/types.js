import PropTypes from 'prop-types';

const TypeUserGeo = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});

const TypeUserAddress = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: TypeUserGeo.isRequired,
});

export const TypeUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: TypeUserAddress.isRequired,
});

export const TypeComment = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

// export const TypeComments = {
//   comments: PropTypes.arrayOf(TypeComment),
// };

export const TypePost = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: TypeComment.isRequired,
});
