import PropTypes from 'prop-types';

export const TypePost = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;

export const TypeUser = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }).isRequired,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    bd: PropTypes.string,
  }),
}).isRequired;

export const TypeComment = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;

export const TypeCommentList = PropTypes.arrayOf(TypeComment).isRequired;
export const TypePostList = PropTypes.arrayOf(TypePost).isRequired;
