import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <>
    <div>
      author:
      {props.user.name}
    </div>
    <div>
      write me:
      {props.user.email}
    </div>
    <div>
      best regards from:
      {props.user.address.city}
      ,  street:
      {props.user.address.street}
      ,  flat:
      {props.user.address.suite}
      ,  zipcode:
      {props.user.address.zipcode}
    </div>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      suite: PropTypes.string,
      zipcode: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default User;
