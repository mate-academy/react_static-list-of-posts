import PropTypes from 'prop-types';
import React from 'react';
import users from './api/users';

const User = ({ user }) => {
  const person = users.find(someone => someone.id === user.userId);

  return (
    <section className="userSection">
      {person.name}
      <br />
      {person.email}
      <br />
      {`${person.address.street} `}
      {`${person.address.suite} `}
      {`${person.address.city} `}
      {`${person.address.zipcode} `}
      {`${person.address.geo.lat} `}
      {`${person.address.geo.lng} `}
    </section>
  );
};

User.propTypes = { user: PropTypes.objectOf(PropTypes.any).isRequired };

export default User;
