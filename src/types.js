import PropTypes from 'prop-types';

export const TypeUser = PropTypes.shape({
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const TypeComments = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
);
