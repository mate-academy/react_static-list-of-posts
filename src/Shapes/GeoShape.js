import PropTypes from 'prop-types';

export const geoShape = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});
