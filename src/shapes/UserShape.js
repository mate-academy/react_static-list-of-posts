import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }),
}).isRequired;
