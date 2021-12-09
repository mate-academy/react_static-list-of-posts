import React from 'react';
import { User } from '../../typedefs/User';
import '../PostList/PostList.scss';

interface Props {
  userInfo: User | undefined,
}

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <p className="post-list__list-item-user-info">
    <span className="post-list__list-item-name">
      {userInfo?.name}
    </span>
    {' | '}
    <a
      href={`mailto: ${userInfo?.email}`}
      className="post-list__list-item-email"
    >
      {userInfo?.email}
    </a>
  </p>
);

// export const UserInfo: React.FC<Props> = ({ userInfo }) => {
//   const { name, email } = userInfo;

//   return (
//     <p className="post-list__list-item-user-info">
//       {name}
//       <br />
//       {email}
//     </p>
//   );
// };
