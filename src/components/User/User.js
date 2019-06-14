import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User(props) {
  const { name, email, address } = props;
  return (
    <div className="user-wrapper">
      {
        props.address
          ? (<h3>{name}</h3>)
          : (<h4>{name}</h4>)
      }
      <ul className="user-info">
        <li>{email}</li>
        {address && (<li>{address}</li>)}
      </ul>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  address: PropTypes.string
};

export default User;
