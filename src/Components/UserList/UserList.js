import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import '../User/user.css';

const UserList = ({ info }) => (
  <>
    <h4>{info.name}</h4>
    <User address={info.address} key={info.id} />
    <a href={info.email} className="link link--user">{info.email}</a>
  </>
);

UserList.propTypes
  = {
    info: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default UserList;
