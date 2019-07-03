import React from 'react';
import propTypes from 'prop-types';

const User = (props) => {
  const userVar = props.user;
  return (
    <>
      <p>{userVar.name}</p>
      <p>{userVar.email}</p>
      <p>
        {`${userVar.address.city
        } ${userVar.address.street
        } ${userVar.address.suite}`}
      </p>
      {console.log(userVar)}
    </>
  );
};
User.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  address: propTypes.object.isRequired,
};
export default User;
