import PropTypes from 'prop-types';
import { geoShape } from './GeoShape';

export const addressShape = PropTypes.shape({
  city: PropTypes.string.isRequired,
  geo: geoShape,
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
});
