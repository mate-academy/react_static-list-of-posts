import React from "react";
import { User } from "../../types/User";

type UserProps = {
  user: User | null;
};

export const UserInfo: React.FC<UserProps> = ({
  user
}) => {
  const email = user?.email;
  const name = user?.name;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
