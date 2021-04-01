import PropTypes from 'prop-types';
import { addressType } from './addressType';

export const userType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: addressType.isRequired,
}).isRequired;
