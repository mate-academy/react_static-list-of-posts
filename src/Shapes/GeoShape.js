import PropTypes from 'prop-types';

export const GeoShape = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});
