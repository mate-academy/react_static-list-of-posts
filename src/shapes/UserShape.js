import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }),
});
