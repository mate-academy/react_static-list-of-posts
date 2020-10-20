import PropTypes from 'prop-types';
import { GeoShape } from './GeoShape';

export const AddressShape = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: GeoShape,
});
