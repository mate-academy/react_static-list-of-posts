import React from 'react';
import { ProtoUserInfo } from '../ProtoPost';

export const User = ({ name, email, address }) => (
  <div className="userInfo">
    <div>{name}</div>
    <a href={`mailto: ${email}`}>{email}</a>
    <div>{address.city}</div>
  </div>
);

User.propTypes = ProtoUserInfo;
