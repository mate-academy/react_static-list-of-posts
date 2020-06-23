import PropTypes from 'prop-types';

const userGeo = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

const userAdressShape = PropTypes.shape({
  street: PropTypes.string,
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
  geo: PropTypes.shape({
    userGeo,
  }),
});

const postsShape = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
});

const userCompanyShape = PropTypes.shape({
  name: PropTypes.string,
  catchPhrase: PropTypes.string,
  bs: PropTypes.string,
});

const usersShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  adress: PropTypes.shape({
    userAdressShape,
  }),
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    userCompanyShape,
  }),
});

const commentsShape = PropTypes.shape({
  postId: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
});

export { commentsShape, usersShape, postsShape };
