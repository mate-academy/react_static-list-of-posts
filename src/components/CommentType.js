import PropTypes from 'prop-types';

export const PropsType = PropTypes.arrayOf(PropTypes.objectOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
)).isRequired;
