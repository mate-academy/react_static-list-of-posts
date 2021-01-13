import PropTypes from 'prop-types';

const AddressShape = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
}).isRequired;

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressShape,
});
