import PropTypes from 'prop-types';

const AdressShape = {
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
};

export const UserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adress: PropTypes.shape(AdressShape).isRequired,
};
