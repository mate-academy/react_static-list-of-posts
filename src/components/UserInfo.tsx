import React from "react";
import { User } from "../Types";

export const UserInfo: React.FC<{user: User|null}> = ({user}) => (
  <div className="post__user user">
    <div className="user__name">{user?.name}</div>
    <div className="user__mail">{user?.email}</div>
  </div>
)