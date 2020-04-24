import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <>
    <div className="author">
      <p>
        {' '}
        <span className="author__title">Author: </span>
        {name}
      </p>
      <a href="mailto:example@gmail.com" className="author__email">{email}</a>
      <p className="author__address">
        <div>
          {address.city}
          ,
        </div>
        <div>
          {address.street}
          ,
        </div>
        <div>{address.zipcode}</div>
      </p>
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf({}).isRequired,
};

export default User;
