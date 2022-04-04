import React from 'react';

// import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <div className="user">
      <h3 className="user_name">{name}</h3>
      <div className="user_email">{email}</div>
    </div>
  </>
);

export default UserInfo;
