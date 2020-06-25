import PropTypes from 'prop-types';
import { GeoTypes } from './GeoTypes';

export const AddressTypes = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: GeoTypes,
});
