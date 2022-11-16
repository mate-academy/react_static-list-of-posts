import './UserInfo.scss';

interface Props {
  name: string,
}

export const UserInfo: React.FC<Props> = ({ name }) => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    {name}
  </a>
);
