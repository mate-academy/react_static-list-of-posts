import PropTypes from 'prop-types';
import { AddressTypes } from './AddressTypes';
import { CompanyTypes } from './CompanyTypes';

export const UserTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressTypes,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: CompanyTypes,
});
