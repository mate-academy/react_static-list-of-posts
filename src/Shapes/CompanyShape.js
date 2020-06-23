import PropTypes from 'prop-types';

export const companyShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  bs: PropTypes.string.isRequired,
});
