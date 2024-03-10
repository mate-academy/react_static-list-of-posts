import React from "react";
import { User } from "../../Types/User";

interface UserInfoProps {
  user: User | undefined;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <>
      {user && (
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      )}
    </>
  );
};
