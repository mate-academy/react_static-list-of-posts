import React from 'react';
import { userType } from '../../types/userType';

export const User = ({ name, email, address }) => {
  const { city, street, suite } = address;

  return (
    <div className="post__user-info">
      <p>
        {<span style={{ color: '#f70000' }}>Name: </span>}
        {name}
      </p>
      <p>
        {<span style={{ color: '#f70000' }}>Email: </span>}
        {email}
      </p>
      <p>
        {<span style={{ color: '#f70000' }}>Address: </span>}
        {`${street} Street, ${city}, ${suite}`}
      </p>
    </div>
  );
};

User.propTypes = userType.isRequired;
