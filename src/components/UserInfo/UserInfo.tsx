import './UserInfo.scss';

type Props = {
  userMail: string,
  userName: string,
};

export const UserInfo: React.FC<Props> = (props) => {
  const {
    userMail,
    userName,
  } = props;

  return (
    <>
      <a className="UserInfo" href={`mailto: ${userMail}`}>
        {userName}
      </a>
    </>
  );
};
