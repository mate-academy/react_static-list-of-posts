import { User } from '../types';

export type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="userInfo">
      {`Written by ${name}`}
      <br />
      {`Contact info:${email}`}
    </div>
  );
};
