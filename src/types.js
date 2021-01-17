import PropTypes from 'prop-types';

export const AddressType = PropTypes.shape({
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
});
