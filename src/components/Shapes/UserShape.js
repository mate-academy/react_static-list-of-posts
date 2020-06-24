import PropTypes from 'prop-types';
import { addressShape } from './AddressShape';
import { company } from './Company';

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  address: addressShape.isRequired,
  company: company.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});
