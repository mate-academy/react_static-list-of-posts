import PropTypes from 'prop-types';

export const checkPropTypesPosts = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
