import PropTypes from 'prop-types';

// User shapes
export const ShapeGeo = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

export const ShapeAddress = PropTypes.shape({
  street: PropTypes.string,
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
  geo: ShapeGeo,
});

export const ShapeCompany = PropTypes.shape({
  name: PropTypes.string,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string,
});

export const ShapeUser = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: ShapeAddress,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: ShapeCompany,
});

export const ShapePost = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
});

export const ShapeComment = PropTypes.shape({
  postId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
});
