import PropTypes from 'prop-types';

// User shapes
export const GeoShape = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

export const AddressShape = PropTypes.shape({
  street: PropTypes.string,
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
  geo: GeoShape,
});

export const CompanyShape = PropTypes.shape({
  name: PropTypes.string,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string,
});

export const UserShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: AddressShape,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: CompanyShape,
});

// Post shape
export const PostShape = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
});

// Comment shape
export const CommentShape = PropTypes.shape({
  postId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
});
