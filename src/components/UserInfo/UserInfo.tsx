import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="userInfo">
    <span className="userInfo__name">
      {name}
    </span>
    <span className="userInfo__email">
      {email}
    </span>
  </div>
);
