import PropTypes from 'prop-types';

export const GeoTypes = PropTypes.shape({
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
});
