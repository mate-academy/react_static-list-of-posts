import PropTypes from 'prop-types';

export const CompanyShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  bs: PropTypes.string.isRequired,
});
