import PropTypes from 'prop-types';

// Users
export const geoShape = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});

export const addressShape = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: geoShape,
});

export const companyShape = PropTypes.shape({
  bs: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: addressShape.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: companyShape.isRequired,
});

// Comments
export const commentsShape = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

// Posts
export const postShape = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});
