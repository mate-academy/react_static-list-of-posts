type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
};
