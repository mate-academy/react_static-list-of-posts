import PropTypes from 'prop-types';
import { geoShape } from './GeoShape';

export const addressShape = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  geo: geoShape,
});
