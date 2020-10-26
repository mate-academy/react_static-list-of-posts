import PropTypes from 'prop-types';
import { AddressShape } from './AddressShape';

export const UserShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressShape.isRequired,
});
