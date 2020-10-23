import PropTypes from 'prop-types';

export const AddressShape = PropTypes.shape({
  city: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
}).isRequired;
