import PropTypes from 'prop-types';
import { AddressShape } from './AddressShape';

export const UserShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  address: AddressShape,
}).isRequired;
