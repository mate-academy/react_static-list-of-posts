import React from 'react';
import './User.scss';
const User = ({ user }) => {
  let {email,name,address}  = user;
  let {street,suite,city,zipcode} = address;

  return (
    <div className='user'>
      <div className='user__name'>
        {name}
      </div>
      <div className='user__email'>
        {email}
      </div>
      <div className='user__address'>
        <div className='user__address-street'>
          {street}
          </div>
        <div className='user__address-suite'>
          {suite}
        </div>
        <div className='user__address-city'>
          {city}
        </div>
        <div className='user__address-zipcode'>
          {zipcode}
        </div>
      </div>
    </div>
  );
}
export default User;
