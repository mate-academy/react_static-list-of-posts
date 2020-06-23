import PropTypes from 'prop-types';
import { addressShape } from './AddressShape';
import { companyShape } from './CompanyShape';

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: addressShape,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: companyShape,
});
