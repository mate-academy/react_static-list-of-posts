import PropTypes from 'prop-types';

// Users
export const geoProp = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});

export const addressProp = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: geoProp,
});

export const companyProp = PropTypes.shape({
  bs: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const userProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: addressProp.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: companyProp.isRequired,
});

// Comments
export const commentsProp = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

// Posts
export const postProp = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});
