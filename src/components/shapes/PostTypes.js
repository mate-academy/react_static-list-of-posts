import PropTypes from 'prop-types';

export const TypePost = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
