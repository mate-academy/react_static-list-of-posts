import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name, email, address }) => (
  <section className="user ">
    <p className="user__name">
      {name}
    </p>
    <div className="user__address">
      <p className="user__city">
        {address.city}
        ,
      </p>
      <p className="user__street">
        {address.street}
        ,
      </p>
      <p className="user__suite">
        {address.suite}
        ,
      </p>
      <a href={`mailto:${email}`} className="comment__email">
        {email}
      </a>
    </div>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf({}).isRequired,
};

export default User;
