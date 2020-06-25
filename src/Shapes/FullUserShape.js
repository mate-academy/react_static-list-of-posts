import PropTypes from 'prop-types';
import { AddressShape } from './AddressShape';
import { CompanyShape } from './CompanyShape';

export const UserShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressShape,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: CompanyShape,
});
