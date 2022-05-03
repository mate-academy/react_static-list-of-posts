import React from 'react';

type Props = {
  name:string;
  email:string;
};

const UserInfo:React.FC<Props> = ({ name, email }) => (
  <div>
    <h3>User info</h3>
    <ul className="space-between user_info ul_styles_reset">
      <li data-cy="name">
        <span className="span_style">User Name :</span>
        {name}
      </li>
      <li data-cy="email">
        <span className="span_style">User Email :</span>
        {email}
      </li>
    </ul>
  </div>
);

export default UserInfo;
